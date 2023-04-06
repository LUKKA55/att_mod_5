import { Request, Response } from 'express';
import { imprementar_User_banco } from '../../BancoDados/bd';

const createUser = (req: Request, res: Response) => {
	const { nick, email, senha } = req.body;

	const incrementar_novo_user = imprementar_User_banco(nick, email, senha);

	res.status(200).json({
		message: 'Novo user cadastrado com sucesso',
		novoUser: incrementar_novo_user,
	});
};
export default createUser;
