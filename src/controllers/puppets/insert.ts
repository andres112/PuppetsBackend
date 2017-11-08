import { puppetService } from '../../services/puppet-service';
import { Puppet } from '../../services/common/puppet';
import { resFail, resSuccess } from '../common/response-body';

import { Response, Request } from 'express';

export function insert(req: Request, res: Response) {
    let body: Puppet = req.body;
    puppetService
        .insert(body)
        .then(result => resSuccess(res))
        .catch(err => resFail(res, 500, err));
}