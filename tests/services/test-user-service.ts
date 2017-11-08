import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as mocha from 'mocha';

import { DBConnection } from '../../src/services/db-connection';
import { UserService } from '../../src/services/user-service';

// se describe una categoria de pruebas
describe("User Service", function () {

  let db: DBConnection;
  let service: UserService;
  let user = {
    nombre: "andres",
    celular: "310",
    email: "andres.dorado90@gmail.com",
    password:"12345",
    sexo: "M",
    edad: 27,
    foto: "C://foto.jpg"
  };

  //se define que se debe realizar antes de las pruebas
  before(function (done) {
    chai.should(); //define metodo de dicha clase para postular lo que deberia
    chai.use(chaiAsPromised); //metodo use en donde se utiliza una promesa

    db = new DBConnection({ // se define una base de datos diferente para no afectar la real
      host: "mongodb://localhost",
      port: 27017,
      database: "mascotasTest"
    }, ()=> {
      
      service = new UserService(db);
      done(); //como es algo asincrono, me define hasta que este realizada la accion
    });
  });

  //DEFINE EL CONJUNTO DE TAREAS A REALIZAR

  it("Signin", function () {
    return service.signin(user).should.eventually.property("insertedCount").equal(1);

  });

  it("Signin with existing user", function () {
    return service.signin(user)
      .should.eventually.rejected
  });

  it("Login", function () {
    return service.login(user.email, user.password)
      .should.eventually.not.null;
  });

  it("Incorrect Login", function(){
    return service.login("dasdasdas", "123123")
      .should.eventually.null;
  });

  //Funciones que se ejecutan luego de hacer las pruebas
  after(function(done){
    db.db.dropCollection("users",function(err){
      if(err) done(err)
      else{
        db.db.close();
        done();
      }
    });
    
  });


});

