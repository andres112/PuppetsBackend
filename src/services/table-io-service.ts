import * as socketIo from 'socket.io';
import { Server } from 'http'

//se requiere inicializar el servidor
export class TableIoService {

    location: SocketIO.Namespace; //namespace es la ruta del path

    init(server: Server) { //inicia el servidor
        let io = socketIo(server); //le asigno a io la inicializacion de un servidor de sockets

        this.location = io.of("socket/location"); //permite utilizar diferentes rutas de conexion socket
        //internas al servidor por paths

        //io.on("connection", (socket) => { //socket representaria un usuario
        this.location.on("connection", (socket) => {

            socket.on("subscribe", (id) => {
                socket.join(id); //para que los clientes solo que se encuentran en la conexion socket
            });

            socket.on("unsubscribe", (id) => {
                socket.leave(id);
            });
        });
    }

    changeAvailable(id: string, lon: number, lat: number) {
        this.location.to(id)
            .emit("location",
            { lon: lon, lat: lat });
    }
}

export const tableIO = new TableIoService();