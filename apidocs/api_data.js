define({ "api": [
  {
    "type": "POST",
    "url": "/api/v1/login",
    "title": "Inicio de Sesion",
    "name": "Login",
    "group": "Usuarios",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Respuesta",
            "description": "<p>Objeto JSON</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Respuesta.success",
            "description": "<p>True si credenciales son correctas</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Respuesta.data",
            "description": "<p>Token de sesion</p>"
          }
        ]
      }
    },
    "filename": "src/routes/users.ts",
    "groupTitle": "Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Credenciales",
            "description": "<p>Objeto JSON</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Credenciales.email",
            "description": "<p>Email de Usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Credenciales.password",
            "description": "<p>Password de Usuario</p>"
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/api/v1/users/signin",
    "title": "Registro de Usuarios",
    "name": "Signin",
    "group": "Usuarios",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Respuesta",
            "description": "<p>Objeto JSON</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "Respuesta.success",
            "description": "<p>True si registro exitoso</p>"
          }
        ]
      }
    },
    "filename": "src/routes/users.ts",
    "groupTitle": "Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "Usuario",
            "description": "<p>Objeto JSON</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Usuario._id",
            "description": "<p>Identificador de usuario, ignorable</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Usuario.nombre",
            "description": "<p>Nombre de Usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Usuario.email",
            "description": "<p>Email de Usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Usuario.celular",
            "description": "<p>Celular de Usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Usuario.password",
            "description": "<p>Password del Usuario</p>"
          }
        ]
      }
    }
  }
] });
