import { puppetService } from '../../services/puppet-service';
import { Puppet } from '../../services/common/puppet';
import { ResponseBody, resFail, resSuccess } from '../common/response-body';
import { Response, Request } from 'express';

export function showPhoto(req: Request, res: Response, next) {
    let id: string = req.params.id;
    puppetService.showPhoto(id)
        .then(result => resSuccess<Puppet[]>(res, result))
        .catch(err => resFail(res, 500, err));
}