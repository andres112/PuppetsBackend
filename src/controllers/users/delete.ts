
import { userService } from '../../services/user-service';
import { ResponseBody,resFail,resSuccess } from '../common/response-body';
import { Request, Response } from 'express';


export function deleteUser(req: Request, res: Response, next) {
    let id: string = req.params.id; 
    userService.delete(id)
    .then(result => resSuccess(res, true))
    .catch(err => resFail(res, 500, err))
}