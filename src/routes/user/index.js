import { Router } from 'express';
import get from './get';
import post from './post';
import update from './put';
import del from './delete';

const router = Router();

router.get('/', get);
router.get('/:id', get);
router.post('/', post);
router.put('/', update);
router.delete('/:id', del);

export default router;