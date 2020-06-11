const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let usuario = {
  nombre: "Faustino",
  apellido: "Arauz",
};

let respuesta = {
  error: false,
  codigo: 200,
  mensaje: "",
};

/* ------------------------------------------------------------------------------ INIT */
app.get("/", function (req, res) {
  respuesta = {
    error: true,
    codigo: 200,
    mensaje: "Punto de inicio",
  };

  res.send(respuesta);
});

/* ------------------------------------------------------------------------------ READ */

app.get("/usuario/", function (req, res) {
  respuesta = {
    error: false,
    codigo: 200,
    mensaje: "",
  };
  if (usuario.nombre === "" || usuario.apellido === "") {
    respuesta = {
      error: true,
      codigo: 501,
      mensaje: "El usuario no ha sido creado",
    };
  } else {
    if (
      req.query.nombre != usuario.nombre ||
      req.query.apellido != usuario.apellido
    ) {
      if (
        typeof req.query.nombre != "undefined" ||
        typeof req.query.apellido != "undefined"
      ) {
        respuesta = {
          error: true,
          codigo: 501,
          mensaje: "El usuario no existe.",
        };
      } else {
        respuesta = {
          error: false,
          codigo: 200,
          mensaje: "respuesta del usuario buscado",
          respuesta: usuario,
        };
      }
    } else {
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: "respuesta del usuario buscado",
        respuesta: usuario,
      };
    }
  }
  res.send(respuesta);
});

/* ------------------------------------------------------------------------------ CREATE */
app.post("/usuario", function (req, res) {
  if (!req.query.nombre || !req.query.apellido) {
    respuesta = {
      error: true,
      codigo: 502,
      mensaje: "El campo nombre y apellido son requeridos",
    };
  } else {
    usuario = {
      nombre: req.query.nombre,
      apellido: req.query.apellido,
    };
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: "Usuario creado",
      respuesta: usuario,
    };
  }

  res.send(respuesta);
});

/* ------------------------------------------------------------------------------ UPDATE */
app.put("/usuario", function (req, res) {
  if (!req.query.nombre || !req.query.apellido) {
    respuesta = {
      error: true,
      codigo: 502,
      mensaje: "El campo nombre y apellido son requeridos",
    };
  } else {
    if (usuario.nombre === "" || usuario.apellido === "") {
      respuesta = {
        error: true,
        codigo: 501,
        mensaje: "El usuario no ha sido creado",
      };
    } else {
      usuario = {
        nombre: req.query.nombre,
        apellido: req.query.apellido,
      };
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: "Usuario actualizado",
        respuesta: usuario,
      };
    }
  }
  res.send(respuesta);
});
/* ------------------------------------------------------------------------------ DELETE */

app.delete("/usuario", function (req, res) {
  if (usuario.nombre === "" || usuario.apellido === "") {
    respuesta = {
      error: true,
      codigo: 501,
      mensaje: "El usuario no ha sido creado",
    };
  } else {
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: "Usuario eliminado",
    };
    usuario = {
      nombre: "",
      apellido: "",
    };
  }
  res.send(respuesta);
});

/* ------------------------------------------------------------------------------ ERROR- 404 */
app.use(function (req, res, next) {
  respuesta = {
    error: true,
    codigo: 404,
    mensaje: "URL no encontrada",
  };
  res.status(404).send(respuesta);
});

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});