import { Request, Response } from 'express';
import { update_recado_banco } from '../../BancoDados/bd';

const update_Recado = (req: Request, res: Response) => {
	const { id, idRecado } = req.params;
	const { title, text } = req.body;
	const recado_update = update_recado_banco(id, idRecado, title, text);
	res.status(200).json({ message: 'Recado atualizado', recado_update });
};

export default update_Recado;
