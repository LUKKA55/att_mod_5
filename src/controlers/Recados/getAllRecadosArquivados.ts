import { Request, Response } from 'express';
import {
	banco_dados_users,
	procurar_User_Id,
	statusFalse,
} from '../../BancoDados/bd';

const getAllRecadosArquivados = (req: Request, res: Response) => {
	const id = req.params.id;
	const user_recados = procurar_User_Id(id);
	const all_recados = banco_dados_users[user_recados].getRecado;
	const recado_false = statusFalse(all_recados);

	res
		.status(200)
		.json({ message: 'Todos os recados arquivados', recado_false });
};
export default getAllRecadosArquivados;
