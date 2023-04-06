import { Request, Response } from 'express';
import { delete_User_banco } from '../../BancoDados/bd';

const deleteUser = (req: Request, res: Response) => {
	const id = req.params.id;
	delete_User_banco(id);
	res.status(200).json({ message: 'User deletado com sucesso' });
};
export default deleteUser;
