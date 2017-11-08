import { Con, DBConnection } from './db-connection';
import { Collection, ObjectID } from 'mongodb';
import { User } from './common/user';

export class UserService {

    get db(): Collection<User> {
        return this.con.db.collection("users");
    }

    constructor(private con: DBConnection) { }


    login(email: string, pass: string) {

        return this.db.findOne({
            email: email,
            password: pass
        });
    }

    signin(user: User) {
        return this.db.findOne({ email: user.email })
            .then(usr => {
                if (usr == null) {
                    return this.db.insertOne(user);
                }
                else {
                    return Promise.reject("Usuario ya existente");
                }
            });
    }

    delete(id: string) {
        return this.db.deleteOne({ _id: new ObjectID(id) });
    }

    updatePhoto(id: string, foto: string) {
        return this.db.updateOne({ _id: new ObjectID(id) },
            { $set: { foto: foto } });
    }

    allByLocation(lon: number, lat: number, km: number = 5) {
        return this.db.find({
            localizacion: {
                $geoWithin: {
                    $centerSphere: [[lon, lat], km / 6378.1]
                }
            }
        }).toArray();
    }

    userLocation(id: string, lon: number, lat: number) {
        return this.db.updateOne({ _id: new ObjectID(id) },
            {
                $set: {
                    localizacion: {
                        type: "Point",
                        coordinates: [lon, lat]
                    }
                }
            })
    }

}

//crea singleton para este servicio user
export const userService = new UserService(Con);