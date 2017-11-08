import { puppetService } from '../../services/puppet-service';
import { resFail, resSuccess } from '../common/response-body';
import { Response, Request } from 'express';


export function hidePhoto(req: Request, res: Response, next) {
    let id_photo: string = req.body;
    let id_puppet: string=req.params.id;
    puppetService
        .hidePhoto(id_puppet, id_photo)
        .then(result => { resSuccess(res) })
        .catch(err => resFail(res, 500, err))
}