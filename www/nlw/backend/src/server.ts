import express from 'express';


const app = express();

app.get('/users', (request, response) => {
    console.log('teste');
});

app.listen(3333);

