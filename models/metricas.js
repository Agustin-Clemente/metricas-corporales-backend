import mongoose from 'mongoose';

const metricasSchema = new mongoose.Schema({
    fecha: { type: Date, required: true },
    peso: { type: Number, required: true },
    grasaCorporal: { type: Number, required: true },
    hidratacion: { type: Number, required: true },
    masaMuscular: { type: Number, required: true },
    imc: { type: Number, required: true }
});

export default mongoose.model('Metricas', metricasSchema);