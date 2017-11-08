import { userService } from '../../services/user-service';
import { tableIO } from '../../services/table-io-service'; // para el manejo de sockets y al actualizacion de mesas
import { resFail, resSuccess } from '../common/response-body';
import { Response, Request } from 'express';

export class UserLocationQuery {
    lat: number;
    lon: number;
    constructor(query: any) {
        this.lat = query.lat ? parseFloat(query.lat) : 0;
        this.lon = query.lon ? parseFloat(query.lon) : 0;
    }
}

export function userLocation(req: Request, res: Response, next) {
    let query: UserLocationQuery = new UserLocationQuery(req.query);
    let id = req.params.id;
    userService.userLocation(id, query.lon, query.lat)
        .then(result => {
            tableIO.changeAvailable(id, query.lon, query.lat);
            resSuccess(res);
        })
        .catch(err => resFail(res, 500, err))
}