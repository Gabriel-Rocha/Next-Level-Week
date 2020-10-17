import express from 'express';
import './database/connection';

import routes from './routes';


const app = express();

app.use(express.json());
app.use(routes);

//Rota = Conjunto
//recurso = Usuarios

// Metodos HTTP = GET, POST, PUT, DELETE
// Parametros 

// GET = Buscar uma informação (Lista, item)
// POST = Criando uma informação 
// PUT = Editar uma informação
// DELETE = Delete uma informação



app.listen(3333);

