import { puppetService } from '../../services/puppet-service';
import { Puppet } from '../../services/common/puppet';
import { ResponseBody, resFail, resSuccess } from '../common/response-body';
import { Response, Request } from 'express';

export class Params {
    tipo: string;
    raza: string;
    sexo: string;
    soltero: boolean;

    constructor(parametros: any) {
        this.tipo = parametros.tipo ? parametros.tipo : "dog";
        this.raza = parametros.raza ? parametros.raza : null;
        this.sexo = parametros.sexo ? parametros.sexo : null;
        this.soltero = parametros.soltero ? parametros.soltero : true;
    }
}

export function allByParams(req: Request, res: Response, next) {
    let parametros = new Params(req.query);
    puppetService.allByParam(req.query)
        .then(result => resSuccess<Puppet[]>(res, result))
        .catch(err => resFail(res, 500, err));
}