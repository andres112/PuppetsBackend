import { puppetService } from '../../services/puppet-service';
import { Puppet } from '../../services/common/puppet';
import { resFail, resSuccess } from '../common/response-body';

import { Response, Request } from 'express';

export function deletePuppet(req: Request, res: Response, next) {
    let id = req.params.id;
    puppetService.delete(id)
        .then(result => resSuccess(res, true))
        .catch(err => resFail(res, 500, err))
}
