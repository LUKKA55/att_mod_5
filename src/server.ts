import express, { Request, Response } from 'express';
import routers from './routers';
import cors from 'cors';

const server = express();
server.use([express.json(), cors()]);
server.use(routers);
const port = process.env.PORT;
server.listen(port, () => console.log(`server rodando`));
