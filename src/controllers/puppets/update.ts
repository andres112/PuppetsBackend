import { puppetService } from '../../services/puppet-service';
import { Puppet } from '../../services/common/puppet';
import { resFail, resSuccess } from '../common/response-body';

import { Response, Request } from 'express';

export function update(req: Request, res: Response, next) {
    let id = req.params.id;
    let body: Puppet = req.body;

    puppetService.update(id, body)
        .then(result => resSuccess(res))
        .catch(err => resFail(res, 500, err));
}