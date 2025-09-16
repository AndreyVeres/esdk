import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { initDb } from './db/pool';
import router from './router';

const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    origin: process.env.APP_HOST,
  })
);

app.use('/api', router);

const startServer = async () => {
  const port = process.env.API_PORT || 3001;
  await initDb();
  app.listen(port, () => console.log(`Server listening on ${port}`));
};

startServer();
