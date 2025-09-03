import express from 'express';
 import cors from 'cors';
 import metricasRouter from './routes/metricas.js';
 import 'dotenv/config';

const app = express();


app.use(cors());
app.use(express.json());

app.use('/api/metricas', metricasRouter);

export default app;

