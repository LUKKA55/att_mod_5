import { Request, Response } from 'express';
import { arquiva_desarquiva, get_recado_by_id } from '../../BancoDados/bd';
import { Recados } from '../../Models/recados';

const arquivaRecado = (req: Request, res: Response) => {
	const { id, idRecado } = req.params;
	const recado_id = get_recado_by_id(id, idRecado);
	const setRecadoStatus = arquiva_desarquiva(recado_id as Recados);

	res.status(200).json({ message: setRecadoStatus });
};
export default arquivaRecado;
