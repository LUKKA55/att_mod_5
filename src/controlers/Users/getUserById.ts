import { Request, Response } from 'express';
import { banco_dados_users, procurar_User_Id } from '../../BancoDados/bd';

const getUserById = (req: Request, res: Response) => {
	const id = req.params.id;

	const procurar_id_banco = procurar_User_Id(id);

	res.status(200).json({ User: banco_dados_users[procurar_id_banco] });
};
export default getUserById;
