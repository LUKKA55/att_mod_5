import { Request, Response } from 'express';
import {
	banco_dados_users,
	create_Recado_banco,
	procurar_User_Id,
} from '../../BancoDados/bd';

const createRecado = (req: Request, res: Response) => {
	const id = req.params.id;
	const { title, text } = req.body;
	const create_recado = create_Recado_banco(id, title, text);
	res.status(200).json({ message: 'Recado criado com sucesso', create_recado });
};

export default createRecado;
