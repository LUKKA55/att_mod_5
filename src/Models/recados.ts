import { v4 } from 'uuid';

export class Recados {
	private id: string;
	constructor(private title: string, private text: string) {
		this.id = v4();
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
	setTitle(novo_title: string) {
		this.title = novo_title;
	}
	setText(novo_text: string) {
		this.text = novo_text;
	}
}
