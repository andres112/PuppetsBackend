import { Response } from 'express';

export class ResponseBody<T> { //deber ir el generico aqui para que en data no genere error
    constructor(public success: boolean,
        public data: T = null, // data de tipo generico, si inicializa en null para cuando la respuesta 
        public err: string = null) { }//no arroje nada
}

export function resFail(res: Response,
    code: number,
    err: any) {
    res.status(code).send(new ResponseBody(false, null, err));
}

export function resSuccess<T>(res:Response,data:T = null){
    res.send(new ResponseBody(true, data));
}