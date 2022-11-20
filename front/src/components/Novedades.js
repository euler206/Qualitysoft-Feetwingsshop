import React, { Fragment, useEffect, useState } from "react";
//import productos from "../data/productos.json";
import { Link } from "react-router-dom";
import {TraerTodos} from "../utils/Catalogo"
export const Novedades = () => {
  const [productos, setproductos] = useState(false)
  const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })
  useEffect(() => { 
    TraerTodos().then(data => {
      setproductos(data)
    })
    
  }, [])
  
  return (
    <Fragment>
      <h1 id="encabezado_productos"> Ultimas Novedades </h1>
      {
        productos ?
        <section id="productos" className="container mt-5">
        <div className="row">
          {productos
            .slice(0, 4)
            .reverse()
            .map((item) => (
              <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                <div className="card p-3 rounded">
                  <img src={item.imagen} alt="adidas-h5678"></img>
                  <div className="card-body d-flex flex-column">
                    <h5 id="titulo_producto">
                      <a href="http://localhost:3000">{item.nombre}</a>
                    </h5>
                    <div className="rating mt-auto">
                      <div className="rating-outer">
                        <div className="rating-inner"></div>
                      </div>
                      <span id="No_ede_opiniones"> 5 Reviews</span>
                    </div>
                    <p className="card-text">{formatterPeso.format(item.precio)}</p>
                    <Link
                      to={`/producto?idProducto=${item._id}`}
                      id="view_btn"
                      className="btn btn-block"
                    >
                      Ver detalle
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
      :<h1>Cargando Novedades...</h1>
      }
      
    </Fragment>
  );
};
export default Novedades;

