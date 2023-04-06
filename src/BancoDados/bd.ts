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

export const procurar_User_Id = (id: string) => {
	const user_id = banco_dados_users.findIndex((ele) => ele.getId === id);
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
	const acha_recado = user_recado.find((ele) => ele.getId === idRecado);
	return acha_recado;
};

export const delete_recado_banco = (id: string, idRecado: string) => {
	const user_recado_delete = banco_dados_users[procurar_User_Id(id)].getRecado;
	const lista_recado_update = user_recado_delete.findIndex(
		(ele) => ele.getId === idRecado
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
		(ele) => ele.getId === idRecado
	);
	if (title) user_recado_lista[recado_index].setTitle(title);
	if (text) user_recado_lista[recado_index].setText(text);
	return user_recado_lista[recado_index];
};