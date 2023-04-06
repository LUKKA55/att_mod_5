import { Request, Response, NextFunction } from 'express';
import { banco_dados_users } from '../BancoDados/bd';

const validationCreate_UpdateUserMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { nick, email, senha, senha2 } = req.body;
	if (senha) {
		if (
			String(senha).split('').length < 8 ||
			String(senha).split(' ').length > 2
		) {
			return res.status(400).json({ message: 'Senha inválida' });
		}
	}
	if (senha2) {
		if (senha2 != senha) {
			return res
				.status(400)
				.json({ message: 'confirmação de senha e senha precisão ser iguais' });
		}
	}
	if (email) {
		if (banco_dados_users.find((ele) => ele.getEmail === email)) {
			return res.status(400).json({ message: 'Email já cadastrado' });
		}
		if (!email.match(/\S+@\S+\.\S+/)) {
			return res.status(400).json({ message: 'Email inválido' });
		}
	}
	if (nick) {
		if (banco_dados_users.find((ele) => ele.getNick === nick)) {
			return res.status(400).json({ message: 'Nick já usado' });
		}
	}
	next();
};
export default validationCreate_UpdateUserMiddleware;
