import { Router } from 'express';
import {
    all, addPhoto, insert, update, deletePuppet
    , hidePhoto,singlenessUpdate,allByParams,showPhoto
} from '../controllers/puppets/index';

import { verifyAuth } from '../middlewares/auth'; //utiliza el middleware de autenticacion

const puppet: Router = Router();

puppet.use(verifyAuth);// como el orden importa si este no se ejecuta no sigue ninguna

puppet.get('/', all);
puppet.post('/', insert);
puppet.put('/:id', update);
puppet.put('/:id/photos', addPhoto);
puppet.get('/:id/photos',showPhoto);
puppet.put('./:id/single', singlenessUpdate);
puppet.get('/search', allByParams);
puppet.put('/:id/hidePhoto',hidePhoto);
puppet.delete('/:id',deletePuppet);


export default puppet;