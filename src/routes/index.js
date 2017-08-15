import { Router } from 'express';
import api from './api';
import user from './user';

const routes = Router();

routes.use('/', api);
routes.use('/user', user);

export default routes;