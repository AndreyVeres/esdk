import { IsString, MinLength, Matches } from 'class-validator';

const phoneRegex = /^(\+375|375|80)\s?(25|29|33|44|17)\s?\d{3}[-]?\d{2}[-]?\d{2}$/;

export class CreateMessageDto {
  @IsString({ message: 'Имя должно быть строкой' })
  @MinLength(2, { message: 'Имя должно содержать минимум 2 символа' })
  name: string;

  @IsString({ message: 'Телефон должен быть строкой' })
  @Matches(phoneRegex, {
    message: 'Неверный белорусский номер. 375 или 80, код оператора, 7 цифр',
  })
  phone: string;

  @IsString({ message: 'Сообщение должно быть строкой' })
  @MinLength(2, { message: 'Сообщение должно содержать минимум 2 символа' })
  message: string;
}
