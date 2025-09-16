import { pool } from '../db/pool';
import { CreateMessageDto } from '../models/create-message.dto';

export class MessageService {
  async create(dto: CreateMessageDto) {
    const { name, phone, message } = dto;
    const result = await pool.query('INSERT INTO messages (name, phone, message) VALUES ($1, $2, $3) RETURNING *', [name, phone, message]);
    return result.rows[0];
  }
}

export const messageService = new MessageService();
