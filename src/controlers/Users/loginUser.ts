import { Request, Response } from 'express';
import { login_User_Banco } from '../../BancoDados/bd';

const loginUser = (req: Request, res: Response) => {
	const { nick, email, senha } = req.body;
	const login = login_User_Banco(nick, email, senha);
	res.status(200).json({ message: 'Login feito com sucesso', login });
};

export default loginUser;
