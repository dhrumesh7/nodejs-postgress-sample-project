import { Request } from 'express';
import { User } from '../entity/user.entity';

export default interface IRequest extends Request {
  user: User;
  body: any;
  params: any;
}
