import { instance as Login } from './login';
import { instance as getBus } from './busAPI';

export const Instances = [Login, getBus];