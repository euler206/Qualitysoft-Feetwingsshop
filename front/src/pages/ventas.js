import React from "react";
import "../App.css";
import { ListarVentasAdmin } from "../components/ListarVentasAdmin";


function ListarVentas() {
  
  return (
    <div className="container">
      <h1>Listar Ventas</h1>
      <div className="row">
        <ListarVentasAdmin />
      </div>
    </div>
  );
}

export default ListarVentas;
