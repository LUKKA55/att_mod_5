import { Request, Response } from 'express';
import { delete_recado_banco, get_recado_by_id } from '../../BancoDados/bd';

const deleteRecado = (req: Request, res: Response) => {
	const { id, idRecado } = req.params;
	const recado_deletado = delete_recado_banco(id, idRecado);
	res.status(200).json({ message: 'Recado deletado', recado_deletado });
};
export default deleteRecado;
