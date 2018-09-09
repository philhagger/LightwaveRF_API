import express from 'express';
import router from './routes/api';
import morgan from 'morgan';

let app = express();

app.use(morgan('dev'));

app.use('/api', router);

app.listen(3000, () => console.log("API listening on port 3000"));