import React from "react";
import "../styles/login.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import JsonData from "../data/UsuariosData.json";
import { Container, Form } from "react-bootstrap";

function Login() {
  const [data, setDate] = useState({
    usuario: "",
    contraseña: 0,
    Rol: "",
  });
  return (
    <Form>
      <Container>
        <div>
          <br></br>
          <h1 className="titulo">Bienvenido!</h1>
        </div>
        <div>
          <label className="label">
            Usuario
            <input
              type="user"
              placeholder="ingrese su usuario"
              onChange={(e) => {
                setDate({ ...data, user: e.target.value });
              }}
            ></input>
          </label>

          <label className="label">
            Contraseña
            <input
              type="pass"
              placeholder="ingrese su contraseña"
              onChange={(e) => {
                setDate({ ...data, pass: e.target.value });
              }}
            ></input>
          </label>

          <div className="boton-div">
            <button onClick={VerInfo} type="submit" className="boton">
              Iniciar sesion
            </button>
          </div>
        </div>
        <a href="/recuperar" type="button" className="label-registro">
          Olvido su contraseña?
        </a>
        <br></br>
        <a href="/registrar" className="label-registro">
          Registrarse!
        </a>
      </Container>
    </Form>
  );

  function Validacion(usuarioNombre, contrasena) {
    var decision = false;
    var datos = JsonData;

    for (const usuario of datos) {
      if (usuarioNombre === usuario.user && contrasena === usuario.pass) {
        decision = true;
      }
    }
    return decision;
  }
  function VerInfo(e) {
   
    if (Validacion(data.user, data.pass)) {
      const dataRol = JsonData.find(item => item.user === data.user)
      localStorage.setItem("userInfo", JSON.stringify(dataRol));
      
    } else {
      alert("Por favor verifique los datos ingresados");
    }
  }
}

export default Login;
