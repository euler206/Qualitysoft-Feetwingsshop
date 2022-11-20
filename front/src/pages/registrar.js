import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {registrar} from "../utils/Usuarios"
import alertify from "alertifyjs" 
import { FaWindows } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Registrar() {
  const [dataLogued, setdataLogued] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || "Cliente"
  );
  let navigate = useNavigate();
  const [nombres, setnombres] = useState("");
  const [apellidos, setapellidos] = useState("");
  const [correo, setcorreo] = useState("");
  const [pass, setpassword] = useState("");
  const [celular, setcelular] = useState("");
  const [genero, setgenero] = useState("Mujer");
  const [Rol, setRol] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = await {
      correo,
      pass,
      nombres,
      apellidos,
      celular,
      genero,
      Rol: Rol || "Cliente",
    };
    registrar(newUser).then(result => {
      if(result.Message.code === 11000){        
        alertify.error(`Direccion de correo ya Registrada ${result.Message.keyValue.correo}`)
      }else{
        navigate("/login");
      }
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="validationServer01">Nombres</label>
          <input
            onChange={(e) => setnombres(e.target.value)}
            type="text"
            class="form-control "
            id="validationServer01"
            placeholder="nombres"
            value={nombres}
            required
          ></input>
          <div class="valid-feedback"></div>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationServer02">Apellidos</label>
          <input
            onChange={(e) => setapellidos(e.target.value)}
            type="text"
            class="form-control"
            id="validationServer02"
            placeholder={"apellidos"}
            value={apellidos}
            required
          ></input>
          <div class="valid-feedback"></div>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationServer02">correo</label>
          <input
            onChange={(e) => setcorreo(e.target.value)}
            type="text"
            class="form-control"
            id="validationServer02"
            placeholder="correo"
            value={correo}
            required
          ></input>
          <div class="valid-feedback"></div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="validationServer01">Nueva contraseña</label>
          <input
            onChange={(e) => setpassword(e.target.value)}
            type="text"
            class="form-control "
            id="validationServer03"
            placeholder="contraseña"
            value={pass}
            required
          ></input>
          <div class="invalid-feedback"></div>
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationServer04">Celular</label>
          <input
            onChange={(e) => setcelular(e.target.value)}
            type="text"
            class="form-control"
            id="validationServer04"
            placeholder="celular"
            value={celular}
            required
          ></input>
          <div class="invalid-feedback"></div>
        </div>
        <div class="col-md-3 mb-3">
          <label>Sexo: </label>
          <select
            value={genero}
            name="select"
            onChange={(e) => setgenero(e.target.value)}
          >
            <option value="Hombre">Hombre</option>
            <option value="Mujer" selected>
              Mujer
            </option>
          </select>
          <div class="invalid-feedback"></div>
        </div>
        {dataLogued.Rol === "Admin" ? (
          <div class="col-md-3 mb-3">
            <label>Rol: </label>

            <select
              value={Rol}
              name="select"
              onChange={(e) => setRol(e.target.value)}
            >
              <option value="Admin">Admin</option>
              <option value="Cliente" selected>
                Cliente
              </option>
            </select>
            <div class="invalid-feedback"></div>
          </div>
        ) : (
          ""
        )}
      </div>

      <button class="btn btn-primary" type="submit">
        Registrarse
      </button>
    </form>
  );
}
export default Registrar;
