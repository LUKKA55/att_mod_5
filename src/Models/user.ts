import { v4 } from 'uuid';
import { Recados } from './recados';

export class User {
	private id: string;
	private recados: Recados[];
	constructor(
		public nick: string,
		private email: string,
		private senha: string
	) {
		this.id = v4();
		this.recados = [];
	}

	get getNick() {
		return this.nick;
	}
	get getEmail() {
		return this.email;
	}
	get getSenha() {
		return this.senha;
	}
	get getId() {
		return this.id;
	}
	get getRecado() {
		return this.recados;
	}
	setEmail(novo_email: string) {
		this.email = novo_email;
	}
	setSenha(nova_senha: string) {
		this.senha = nova_senha;
	}
	setNick(novo_nick: string) {
		this.nick = novo_nick;
	}
	setRecado(title: string, text: string) {
		const new_recado = new Recados(title, text);
		this.recados.push(new_recado);
		return new_recado;
	}
	setRecadosDelete(lista_recado_update: number) {
		return this.recados.splice(lista_recado_update, 1);
	}
}
