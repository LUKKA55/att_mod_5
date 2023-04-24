import { Request, Response } from 'express';
import {
	banco_dados_users,
	filter_recado,
	procurar_User_Id,
} from '../../BancoDados/bd';

const getRecadosFiltro = (req: Request, res: Response) => {
	const id = req.params.id;
	const { title, status } = req.query;
	const index_user = procurar_User_Id(id);
	const recados = banco_dados_users[index_user].getRecado;
	const filtra_Title_Status = filter_recado(
		recados,
		title as string,
		status as string
	);
	res.status(200).json(filtra_Title_Status);
};
export default getRecadosFiltro;
