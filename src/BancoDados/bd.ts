import { Recados } from '../Models/recados';
import { User } from '../Models/user';

export let banco_dados_users: User[] = [
	new User('Lucas', 'lucas@gmail.com', '12345678'),
	new User('Isadora', 'isadora@gmail.com', '87654321'),
];

export const imprementar_User_banco = (
	nick: string,
	email: string,
	senha: string
) => {
	const novo_user = new User(nick, email, senha);
	banco_dados_users.push(novo_user);
	return novo_user;
};

export const login_User_Banco = (
	nick: string,
	email: string,
	senha: string
) => {
	const confirm_User = banco_dados_users.find(
		(user) =>
			user.getNick === nick &&
			user.getEmail === email &&
			user.getSenha === senha
	);
	return confirm_User;
};

export const procurar_User_Id = (id: string) => {
	const user_id = banco_dados_users.findIndex((user) => user.getId === id);
	return user_id;
};

export const delete_User_banco = (id: string) => {
	const user_id = procurar_User_Id(id);
	banco_dados_users.splice(user_id, 1);
};

export const update_User_banco = (
	id: string,
	nick: string,
	email: string,
	senha: string
) => {
	const update_User = procurar_User_Id(id);
	if (nick) banco_dados_users[update_User].nick = nick;
	if (email) banco_dados_users[update_User].setEmail(email);
	if (senha) banco_dados_users[update_User].setSenha(senha);
	return banco_dados_users[update_User];
};

export const create_Recado_banco = (
	id: string,
	title: string,
	text: string
) => {
	const index_User = procurar_User_Id(id);
	return banco_dados_users[index_User].setRecado(title, text);
};

export const get_recado_by_id = (id: string, idRecado: string) => {
	const user_recado = banco_dados_users[procurar_User_Id(id)].getRecado;
	const acha_recado = user_recado.find((recado) => recado.getId === idRecado);
	return acha_recado;
};

export const delete_recado_banco = (id: string, idRecado: string) => {
	const user_recado_delete = banco_dados_users[procurar_User_Id(id)].getRecado;
	const lista_recado_update = user_recado_delete.findIndex(
		(recado) => recado.getId === idRecado
	);
	const lista_ =
		banco_dados_users[procurar_User_Id(id)].setRecadosDelete(
			lista_recado_update
		);
	return lista_;
};

export const update_recado_banco = (
	id: string,
	idRecado: string,
	title: string,
	text: string
) => {
	const user_recado_lista = banco_dados_users[procurar_User_Id(id)].getRecado;
	const recado_index = user_recado_lista.findIndex(
		(recado) => recado.getId === idRecado
	);
	if (title) user_recado_lista[recado_index].setTitle(title);
	if (text) user_recado_lista[recado_index].setText(text);
	return user_recado_lista[recado_index];
};

export const statusTrue = (lista_Recado: Recados[]) => {
	return lista_Recado.filter((recado) => recado.getStatus === true);
};
export const statusFalse = (lista_Recado: Recados[]) => {
	return lista_Recado.filter((recado) => recado.getStatus !== true);
};

export const arquiva_desarquiva = (recado: Recados) => {
	const status = recado.getStatus;
	if (status === true) {
		recado.setStatus(false);
		return 'Recado arquivado';
	} else {
		recado.setStatus(true);
		return 'Recado desarquivado';
	}
};

export const filter_recado = (
	recados: Recados[],
	title: string,
	status: string
) => {
	if (status === 'true') {
		const recado_filtrado = recados.filter((recado) => {
			return (
				recado.getTitle.toLowerCase().includes(title.toLowerCase()) &&
				recado.getStatus === true
			);
		});
		return recado_filtrado;
	}
	console.log(status);
	if (status === 'false') {
		const recado_filtrado = recados.filter((recado) => {
			return (
				recado.getTitle.toLowerCase().includes(title.toLowerCase()) &&
				recado.getStatus === false
			);
		});
		return recado_filtrado;
	}
	return 'recado não encontrado';
};
