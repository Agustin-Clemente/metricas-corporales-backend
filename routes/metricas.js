import express from 'express';
const router = express.Router();
import { MongoClient, ServerApiVersion } from 'mongodb';
import 'dotenv/config';
import Metrica from '../models/metricas.js';

// Variables de entorno
const MONGODB_URI = process.env.MONGODB_URI;
const client = new MongoClient(MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

router.post('/', async (req, res) => {
  try {
      const nuevaMetrica = new Metrica(req.body);
      const metricaGuardada = await nuevaMetrica.save();
      res.status(201).json(metricaGuardada);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});

  router.get('/', async (req, res) => {
    try {
    const metricas = await Metrica.find();
    res.json(metricas);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
 });

export default router;