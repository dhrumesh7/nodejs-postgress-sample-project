import { Request, Response } from 'express';
import IRequest from './IRequest';

export default interface IController {
  (req: Request, res: Response): void;
}
