import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';

export const validateDto = <T extends { new (): any }>(dtoClass: T) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const dtoInstance = plainToInstance(dtoClass, req.body);

    validate(dtoInstance, { whitelist: true, forbidNonWhitelisted: true }).then(errors => {
      if (errors.length > 0) {
        const messages = errors.map(err => Object.values(err.constraints ?? {})).flat();
        return res.status(400).json({ errors: messages });
      } else {
        next();
      }
    });
  };
};
