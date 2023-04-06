import express, { Request, Response } from 'express';
import routers from './routers';

const server = express();
server.use(express.json());
server.use(routers);

server.listen(9090, () => console.log('server rodando na porta 9090'));
