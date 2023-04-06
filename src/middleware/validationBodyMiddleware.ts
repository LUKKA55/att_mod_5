import { Request, Response, NextFunction } from 'express';

const validationBodyMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (Object.values(req.body).some((ele) => !ele)) {
		return res.status(418).send({ message: 'Informe todos os campos' });
	}
	next();
};
export default validationBodyMiddleware;
