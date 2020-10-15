import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';
import './database/connection';
import routes from './routes';

import errorHandler from './errors/handler'; //organizar sempre aqui na ordem certa


const app  = express();

app.use(cors());

app.use(express.json()) //dizendo que vou usar json
app.use(routes)
// rota p listar usuario = conjunto inteiro
// recurso = usuario
// metodos http = get, post, put, delete
// parametros p enviar para rotas

// get = buscar informação = lista, item
// post = criando uma info
// put = editando info
// delete = deletando info

// dois pontos :id significa parametro para a rota


app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'))); //fazer aparecer a imagem
app.use(errorHandler);
app.listen(3333);

//localhost 3333
//REQ/RESP

