export class UserPuppet {
    nombre: string;
    cedula: string;
}

export class Photo {
    _id?: string;
    nombre: string;
    visible: boolean;
}

export class Puppet {
    _id?: string;
    nombre: string;
    raza: string;
    color: string;
    tamano: string;
    sexo: string;
    edad: number;
    propietario: UserPuppet;
    soltero: boolean;
    tipo: string;
    fotos?: Photo[];
}