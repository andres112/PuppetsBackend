
import { userService } from '../../services/user-service';
import { ResponseBody } from '../common/response-body';
import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { config } from '../../config/global';
/**
 * @apiDefine LoginBody
 * @apiParam {Object} Credenciales Objeto JSON
 * @apiParam {String} Credenciales.email Email de Usuario
 * @apiParam {String} Credenciales.password Password de Usuario
 */
export interface LoginBody {//el export en este caso es para las pruebas
    email: string;
    password: string;
} //con esta interfaz se castea el body del request

//se define la funcion de control de login
export function login(req: Request, res: Response, next) {
    let body: LoginBody = req.body; 
    userService.login(body.email, body.password)
        .then(result => {
            if (result) {
                let token = sign({ id: result._id },//se define token para encapsular ahi lo que se quiera encriptar
                    config.secret, //primero el dato que se quiere encriptar, y luego la clave de encriptacion
                    { expiresIn: "1h" }); // tiempo que expira el token
                res.send(new ResponseBody(true, token));
            }
            else res.send(new ResponseBody(false));
        })
        //se captura algun error por parte del servidor
        .catch(err => res.status(500)
            .send(new ResponseBody(false, null, err)));
}