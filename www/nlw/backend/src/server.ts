import express from 'express';
import 'express-async-errors';
import './database/connection';
import path from 'path';
import cors from 'cors';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/upload', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

//Rota = Conjunto
//recurso = Usuarios

// Metodos HTTP = GET, POST, PUT, DELETE
// Parametros 

// GET = Buscar uma informação (Lista, item)
// POST = Criando uma informação 
// PUT = Editar uma informação
// DELETE = Delete uma informação



app.listen(3333);

