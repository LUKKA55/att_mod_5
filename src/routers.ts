import { Request, Response, Router } from 'express';
import createUser from './controlers/Users/createUser';
import getAllUser from './controlers/Users/getAllUser';
import getUserById from './controlers/Users/getUserById';
import deleteUser from './controlers/Users/deleteUser';
import update_User from './controlers/Users/updateUser';
import createRecado from './controlers/Recados/createRecado';
import getAllRecados from './controlers/Recados/getAllRecados';
import getRecadosById from './controlers/Recados/getRecadoById';
import deleteRecado from './controlers/Recados/deleteRecado';
import update_Recado from './controlers/Recados/updateRecado';
import validationBodyMiddleware from './middleware/validationBodyMiddleware';
import validationCreate_UpdateUserMiddleware from './middleware/validationCreate_UpdateUserMiddleware';
import validationIdUser_RecadoMiddleware from './middleware/validationIdUser_RecadoMiddleware';
import loginUser from './controlers/Users/loginUser';
import validationLoginMiddleware from './middleware/validationLoginMiddleware';

const routers = Router();

routers.post(
	'/create',
	validationBodyMiddleware,
	validationCreate_UpdateUserMiddleware,
	createUser
);
routers.post(
	'/login',
	validationBodyMiddleware,
	validationLoginMiddleware,
	loginUser
);
routers.get('/users', getAllUser);
routers.get('/users/:id', validationIdUser_RecadoMiddleware, getUserById);
routers.delete('/users/:id', validationIdUser_RecadoMiddleware, deleteUser);
routers.put(
	'/users/:id',
	validationIdUser_RecadoMiddleware,
	validationCreate_UpdateUserMiddleware,
	update_User
);

routers.post(
	'/users/:id/createrecado',
	validationIdUser_RecadoMiddleware,
	validationBodyMiddleware,
	createRecado
);
routers.get(
	'/users/:id/recados',
	validationIdUser_RecadoMiddleware,
	getAllRecados
);
routers.get(
	'/users/:id/recados/:idRecado',
	validationIdUser_RecadoMiddleware,
	getRecadosById
);
routers.delete(
	'/users/:id/recados/:idRecado',
	validationIdUser_RecadoMiddleware,
	deleteRecado
);
routers.put(
	'/users/:id/recados/:idRecado',
	validationIdUser_RecadoMiddleware,
	update_Recado
);

export default routers;
