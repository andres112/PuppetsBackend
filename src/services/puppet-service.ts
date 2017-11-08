import { Con, DBConnection } from './db-connection';
import { Collection, ObjectID } from 'mongodb';
import { Puppet, Photo } from './common/puppet';

export interface Features {
    tipo: string;
    raza?: string;
    sexo?: string;
    soltero?: boolean;
}

class PuppetService {

    private get db(): Collection<Puppet> {
        return this.con.db.collection("puppets")
    }

    constructor(private con: DBConnection) { }


    insert(pup: Puppet) {
        return this.db.insertOne(pup);
    }

    update(id: string, pup: Puppet) {
        return this.db.updateOne({ _id: new ObjectID(id) },
            { $set: pup });
    }

    delete(id: string) {
        return this.db.deleteOne({ _id: new ObjectID(id) })
    }

    all(skip: number = 0, limit: number = 0) {
        return this.db.find()
            .skip(skip)
            .limit(limit)
            .toArray();
    }

    allByParam(caracteristicas: Features) {
        return this.db.find({
            tipo: caracteristicas.tipo,
            raza: caracteristicas.raza,
            sexo: caracteristicas.sexo,
            soltero: caracteristicas.soltero

        }).toArray();
    }

    singlenessUpdate(id: string, available: boolean) {
        return this.db.updateOne({
            _id: new ObjectID(id),
        },
            {
                $set: {
                    soltero: available
                }
            });
    }

    addPhoto(id: string, foto: Photo) {
        return this.db.updateOne({ _id: new ObjectID(id) },
            { $push: { fotos: foto } });
    }

    showPhoto(id: string) {
        return this.db.aggregate([
            { $match: { _id: new ObjectID(id) } },
            { $project: { fotos: 1 } },
        ]).toArray();
    }

    hidePhoto(id: string, id_fotos: string) {
        return this.db.aggregate([
            { $match: { _id: new ObjectID(id) } },
            { $project: { fotos: 1 } },
            { $unwind: "fotos" },
            { $match: { "fotos._id": id_fotos } },
            { $set: { "fotos.visible": false } }
        ]).toArray();
    }

}

//Singleton de servicio de Restaurantes
export const puppetService = new PuppetService(Con);