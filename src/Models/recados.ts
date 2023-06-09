import { v4 } from 'uuid';

export class Recados {
	private id: string;
	private status: boolean;
	constructor(private title: string, private text: string) {
		this.id = v4();
		this.status = true;
	}

	get getTitle() {
		return this.title;
	}
	get getText() {
		return this.text;
	}
	get getId() {
		return this.id;
	}
	get getStatus() {
		return this.status;
	}
	setTitle(novo_title: string) {
		this.title = novo_title;
	}
	setText(novo_text: string) {
		this.text = novo_text;
	}
	setStatus(novo_status: boolean) {
		this.status = novo_status;
	}
}
