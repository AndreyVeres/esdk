import { Router, Request, Response } from 'express';
import { pool } from '../db/pool';

interface MessageBody {
  name: string;
  phone: string;
  message: string;
}

const MessageRouter = Router();

MessageRouter.post('/', async (req: Request<{}, {}, MessageBody>, res: Response) => {
  const { name, phone, message } = req.body;
  if (!name || !phone || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    const result = await pool.query('INSERT INTO messages (name, phone, message) VALUES ($1, $2, $3) RETURNING *', [name, phone, message]);
    const msg = result.rows[0];
    res.status(201).json({ msg });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

MessageRouter.get('/', async (_, res) => {
  try {
    const { rows } = await pool.query(`SELECT * FROM messages`);
    return res.status(201).json({ messages: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});

export default MessageRouter;
