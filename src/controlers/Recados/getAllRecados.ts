import { Request, Response } from 'express';
import {
	banco_dados_users,
	procurar_User_Id,
	statusTrue,
} from '../../BancoDados/bd';

const getAllRecados = (req: Request, res: Response) => {
	const id = req.params.id;
	const user_recados = procurar_User_Id(id);
	const all_recados = banco_dados_users[user_recados].getRecado;
	const recado_true = statusTrue(all_recados);

	res.status(200).json({ message: 'Todos os recados', recado_true });
};
export default getAllRecados;
