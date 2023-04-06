import { Request, Response, NextFunction } from 'express';
import { banco_dados_users, procurar_User_Id } from '../BancoDados/bd';

const validationIdUser_RecadoMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { id, idRecado } = req.params;
	if (id) {
		const validation_User_Id = banco_dados_users.findIndex(
			(ele) => ele.getId === id
		);
		if (validation_User_Id === -1) {
			return res.status(400).json({ message: 'User Id não encontrado' });
		}
	}

	if (idRecado) {
		const validation_Recado_Id = banco_dados_users[
			procurar_User_Id(id)
		].getRecado.find((ele) => ele.getId === idRecado);
		if (validation_Recado_Id === undefined) {
			return res.status(400).json({ message: 'Recado Id não encontrado' });
		}
		const validation_Recado_Id_Index = banco_dados_users[
			procurar_User_Id(id)
		].getRecado.findIndex((ele) => ele.getId === idRecado);
		if (validation_Recado_Id_Index === -1) {
			return res.status(400).json({ message: 'Recado Id não encontrado' });
		}
	}
	next();
};
export default validationIdUser_RecadoMiddleware;
