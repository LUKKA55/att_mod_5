import express, { Request, Response } from 'express';
import routers from './routers';

const server = express();
server.use(express.json());
server.use(routers);
const port = process.env.PORT;
server.listen(port, () => console.log(`server rodando`));
