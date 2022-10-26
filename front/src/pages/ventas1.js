import React from "react";
import "../App.css";

import {CargarVentas,Total} from "../components/CargarVentas";


function ListarVentas() {
  return (
    <div className="container">
      <h1>Listar Ventas</h1>
      <div className="row">
        <div className="col-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Fecha</th>
                <th scope="col">idVenta</th>
                <th scope="col">Valor</th>
              </tr>
            </thead>
              { <CargarVentas /> }
              { <Total /> }
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListarVentas;
