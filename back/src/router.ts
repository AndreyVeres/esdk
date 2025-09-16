import { Router } from 'express';
import { messageController } from './controllers/message.controller';
import { CreateMessageDto } from './models/create-message.dto';
import { validateDto } from './utils/validate';

const router = Router();
router.post('/messages', validateDto(CreateMessageDto), messageController.create);

export default router;
