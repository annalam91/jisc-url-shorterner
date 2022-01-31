import bodyParser from 'body-parser';
import cors from 'cors';
import db from './db';
import express from 'express';
import routes from './routes';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))

const port = 4000;

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Application listening on ${port}`);
    db();
    routes(app);
})