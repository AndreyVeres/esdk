import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import MessageRouter from './controllers/message.controller';
import { initDb } from './db/pool';

const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    origin: process.env.APP_HOST,
  })
);

app.use('/messages', MessageRouter);

const startServer = async () => {
  const port = process.env.API_PORT || 3001;
  await initDb();
  app.listen(port, () => console.log(`Server listening on ${port}`));
};

startServer();
