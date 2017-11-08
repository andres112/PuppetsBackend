import { resFail, resSuccess } from '../common/response-body';
import { userService } from '../../services/user-service';

import { Response, Request } from 'express';

export function updatePhoto(req: Request, res: Response, next) {
    let id = req.params.id;
    let photo: string = req.body;

    userService.updatePhoto(id,photo)
        .then(result => resSuccess(res))
        .catch(err => resFail(res, 500, err));
}