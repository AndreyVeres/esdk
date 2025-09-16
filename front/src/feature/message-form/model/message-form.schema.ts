import { z } from 'zod';

const phoneRegex = /^(\+375|375|80)\s?(25|29|33|44|17)\s?\d{3}[-]?\d{2}[-]?\d{2}$/;

export const MessageFormSchema = z.object({
  name: z.string().min(2, { message: 'Имя должно содержать минимум 2 символа' }),
  phone: z.string().regex(phoneRegex, 'Неверный белорусский номер. 375 или 80, код оператора, 7 цифр'),
  message: z.string().min(2, { message: 'Сообщение должно содержать минимум 2 символа' }),
});

export type MessageFormType = z.infer<typeof MessageFormSchema>;
