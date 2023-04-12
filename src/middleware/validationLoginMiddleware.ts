import { NextFunction, Request, Response } from 'express';
import { banco_dados_users } from '../BancoDados/bd';

const validationLoginMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const [nick, email, senha] = req.body;
	const valid = banco_dados_users.find(
		(ele) =>
			ele.getNick === nick && ele.getEmail === email && ele.getSenha === senha
	);
	if (valid === undefined) {
		return res.status(400).json({ message: 'Nick, Email ou Senha incorretos' });
	}
	next();
};

export default validationLoginMiddleware;
