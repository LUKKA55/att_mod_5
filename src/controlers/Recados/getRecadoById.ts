import { Request, Response } from 'express';
import { get_recado_by_id } from '../../BancoDados/bd';

const getRecadosById = (req: Request, res: Response) => {
	const { id, idRecado } = req.params;
	const recado_id = get_recado_by_id(id, idRecado);
	res.status(200).json(recado_id);
};
export default getRecadosById;
