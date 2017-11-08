import { puppetService } from '../../services/puppet-service';
import { Puppet } from '../../services/common/puppet';
import { resFail, resSuccess } from '../common/response-body';

import { Response, Request } from 'express';

export class PuppetQuery {

    limit: number;
    skip: number;

    constructor(query: any) {
        this.limit = query.limit ? parseInt(query.limit) : 0;
        this.skip = query.skip ? parseInt(query.skip) : 0;
    }
}

export function all(req: Request, res: Response, next) {
    let query: PuppetQuery = new PuppetQuery(req.query);
    puppetService.all(query.skip, query.limit)
        .then(result => resSuccess<Puppet[]>(res, result))
        .catch(err => resFail(res, 500, err));
}