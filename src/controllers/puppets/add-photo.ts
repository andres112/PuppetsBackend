import { puppetService } from '../../services/puppet-service';
import { resFail, resSuccess } from '../common/response-body';
import { Response, Request } from 'express';

export interface AddPhoto {
    nombre: string;
    visible: boolean;
}


export function addPhoto(req: Request, res: Response, next) {
    let body: AddPhoto = req.body;
    let id: string = req.params.id;
    puppetService
        .addPhoto(id, body)
        .then(result => { resSuccess(res) })
        .catch(err => resFail(res, 500, err))
}