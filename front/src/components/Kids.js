import React, { Fragment, useEffect, useState } from "react";
import productos from "../data/productos.json";
import { Link } from "react-router-dom";
import { TraerTodos } from "../utils/Catalogo"

export const Kids = () => {
  useEffect(() => {
    TraerTodos().then(data => {
      setData(data.filter(item => item.genero === "Niños"))
    })
  }, [])

  const [data, setData] = useState(false);

  return ( 
    <Fragment>
      <h1 id="encabezado_productos">Catalogo de Niños</h1>

      <section id="productos" className="container mt-5">
        <div className="row">
          {data ? data.map((item) => (
            <div key={item.id} className="col-sm-12 col-md-6 col-lg-3 my-3">
              <div className="card p-3 rounded">
                <img
                  className="card-img-top mx-auto"
                  src={item.imagen}
                  alt={item.nombre}
                ></img>
                <div className="card-body d-flex flex-column">
                  <h5 id="titulo_producto">
                    <Link to={`/producto?idProducto=${item.id}`}>
                      {item.nombre}
                    </Link>
                  </h5>
                  <div className="rating mt-auto">
                    <div className="rating-outer">
                      <div className="rating-inner"></div>
                    </div>
                    <span id="No_de_opiniones">
                      {item.reviews.length} Reviews
                    </span>
                  </div>
                  <p className="card-text">{item.precio}</p>
                  <Link
                    to={`/producto?idProducto=${item.id}`}
                    id="view_btn"
                    className="btn btn-block"
                  >
                    Ver detalle
                  </Link>
                </div>
              </div>
            </div>
          )):""}
          <div className="col-sm-12 col-md-6 col-lg-3 my-3"></div>
        </div>
      </section>
    </Fragment>
  );
};
