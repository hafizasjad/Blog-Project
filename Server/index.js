import express from 'express';
import Connection from './Database/DB.js';
import  Router  from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

Connection(app.listen(8000));

