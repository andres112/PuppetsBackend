import { puppetService } from '../../services/puppet-service';
import { resFail, resSuccess } from '../common/response-body';
import { Response, Request } from 'express';


export function singlenessUpdate(req: Request, res: Response, next) {
    let body: boolean = req.body;
    let id: string=req.params.id;
    puppetService
        .singlenessUpdate(id, body)
        .then(result => { resSuccess(res) })
        .catch(err => resFail(res, 500, err))
}