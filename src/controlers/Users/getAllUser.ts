import { Request, Response } from 'express';
import { banco_dados_users } from '../../BancoDados/bd';

const getAllUser = (req: Request, res: Response) => {
	res.status(200).json({ Users: banco_dados_users });
};

export default getAllUser;
