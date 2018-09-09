import { Router } from 'express';
import { register, triggerLight } from './lightwave/lightwave';

const router = Router();

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

router.get('/lightwave/room/:room/device/:device/:on/:dim?', triggerLight);
router.get('/lightwave/register', register);

export default router;
