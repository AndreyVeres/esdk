import { Request, Response } from 'express';
import { messageService } from '../services/message.service';
import { CreateMessageDto } from '../models/create-message.dto';

class MessageController {
  async create(req: Request<{}, {}, CreateMessageDto>, res: Response) {
    try {
      const msg = await messageService.create(req.body);
      res.status(201).json({ msg });
    } catch (err) {
      res.status(500).json({ error: 'DB error' });
    }
  }
}

export const messageController = new MessageController();
