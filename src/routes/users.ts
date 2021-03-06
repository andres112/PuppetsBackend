
import { Router } from 'express';
//importa las variables agrupadas en index de la carpeta users
import { login, signin,allLocation,deleteUser,
updatePhoto,userLocation } from '../controllers/users/index';

//define constante para manejar las rutas
const users: Router = Router();
//se hacen las peticiones http en donde se asignas las rutas a seguir dentro del controlador
//se definen los paths para cada servicio web
/**
 * @api {POST} /api/v1/login Inicio de Sesion
 * @apiName Login
 * @apiGroup Usuarios
 * @apiVersion 1.0.0
 * 
 * @apiUse LoginBody
 * 
 * @apiSuccess {Object} Respuesta Objeto JSON
 * @apiSuccess {Boolean} Respuesta.success True si credenciales son correctas
 * @apiSuccess {String} Respuesta.data Token de sesion
 */ 
users.post("/login", login);

/**
 * @api {POST} /api/v1/users/signin Registro de Usuarios
 * @apiName Signin
 * @apiGroup Usuarios
 * @apiVersion 1.0.0
 * 
 * @apiUse User
 * 
 * @apiSuccess {Object} Respuesta Objeto JSON
 * @apiSuccess {Boolean} Respuesta.success True si registro exitoso
 */
users.post("/signin", signin);
users.get('/point', allLocation);
users.put('/:id/photo',updatePhoto);
users.put('/:id/location',userLocation);
users.delete('/:id',deleteUser);



export default users;
