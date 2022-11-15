import path from 'node:path';
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { router } from './router';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(router);

const PORT = process.env.PORT;

mongoose.connect('mongodb://localhost:27017')
    .then(() => console.log('COnectado ao DB'))
    .catch((err) => console.log('Erro ao conectar:', err));

app.listen(PORT, () => {
    console.log(`Server in running on ${PORT}`);
});