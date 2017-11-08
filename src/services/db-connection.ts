// se importan librerias necesarias
import { config } from '../config/global'; // la configuracion de la BD
import { MongoClient, Db } from 'mongodb'; //librerias de mongo

export class DBConnection {

    db: Db; 

    constructor(configDB: any, callback: () => void = null) {

        const connection = configDB.host
            + ":" + configDB.port
            + "/" + configDB.database;

        MongoClient.connect(connection) //Conexion a la base de datos
            .then(db => {
                this.db = db;
                //permite controlar acciones de tipo location en mongo en 2D
                db.collection("banks").createIndex({ localizacion: "2dsphere" });

                if (callback) callback();
            })
            .catch(err => console.log(err))
    }

}

//genera singleton de la anterior clase con valores por defecto
export const Con = new DBConnection(config.database, () => { });