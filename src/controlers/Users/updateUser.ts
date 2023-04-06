import { Request, Response } from 'express';
import {
	banco_dados_users,
	procurar_User_Id,
	update_User_banco,
} from '../../BancoDados/bd';

const update_User = (req: Request, res: Response) => {
	const id = req.params.id;
	const { nick, email, senha } = req.body;
	const update_User = update_User_banco(id, nick, email, senha);

	res
		.status(200)
		.json({ message: 'User atualizado com sucesso', user: update_User });
};
export default update_User;
