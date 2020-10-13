import path from 'path';
import express from 'express';
import 'express-async-errors'
import cors from 'cors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const PORT = 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

app.listen(PORT);