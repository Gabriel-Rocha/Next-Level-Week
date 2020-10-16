import express from 'express';


const app = express();

app.use(express.json());

//Rota = Conjunto
//recurso = Usuarios

// Metodos HTTP = GET, POST, PUT, DELETE
// Parametros 

// GET = Buscar uma informação (Lista, item)
// POST = Criando uma informação 
// PUT = Editar uma informação
// DELETE = Delete uma informação

app.get('/users', (request, response) => {
    return response.json({ message: 'teste'});
});

app.listen(3333);

