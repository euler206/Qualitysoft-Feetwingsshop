import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//import productos from "../data/productos.json";
import BotonAddCar from "../components/BotonAddCar";
import { traerPorId } from "../utils/Catalogo";

export const ProductDetails = () => {
  useEffect(() => {
    traerPorId(query.get("idProducto")).then(data => {
      setproductoFiltrado(data);
    })
  }, [])
  
  const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  };
  let query = useQuery();  
  const [dataID, setdataID] = useState(query.get("idProducto"));
  const [cantidadCompra, setCantidadCompra] = useState(1);
  const sumar = () => setCantidadCompra(cantidadCompra + 1);
  const restar = () => setCantidadCompra(cantidadCompra - 1);
  const [productoFiltrado, setproductoFiltrado] = useState(false);
  

  return (
    
    <div>
      {
        productoFiltrado ? 
      
      <div className="row d-flex justify-content-around">
        <div className="col-12 col-lg-5 img-fluid" id="imagen_producto">
          <img
            clasName="d-block w-100"
            src={productoFiltrado.imagen}
            alt="Imagen del producto"
          ></img>
        </div>

        <div className="col-12 col-lg-5">
          <h3>{productoFiltrado.nombre}</h3>
          <p id="produc_id">ID del Product #{productoFiltrado._id}</p>
          <hr />

          <div className="rating-outer">
            <div className="rating-inner"></div>
          </div>
          <span id="No_de_opiniones">{productoFiltrado.reviews.length} Reviews</span>
          <hr />
          <p id="precio_producto">${productoFiltrado.precio}</p>
          <div className="stockCounter d-inline">
            <span className="btn btn-danger minus" onClick={restar}>
              -
            </span>
            <input
              type="number"
              className="form-control count d-inline"
              value={cantidadCompra}
              readOnly
            />
            <span className="btn btn-primary plus" onClick={sumar}>
              +
            </span>
          </div>
          <BotonAddCar
            idProducto={productoFiltrado._id}            
            cantidad={cantidadCompra}
            stock={productoFiltrado.cantidad}           
          />

          <hr />
          <p>Stock: {productoFiltrado.cantidad}</p>
          <hr />
          <h4 className="mt-2">Descripción:</h4>
          <p>{productoFiltrado.descripcion}</p>
          <hr />
          <button
            id="btn_review"
            type="button"
            className="btn btn-primary mt-4"
            data-toggle="modal"
            data-target="#ratingModal"
          >
            Deja tu Opinion
          </button>
          <div className="alert alert-danger mt-5" type="alert">
            Inicia sesión para dejar tu review
          </div>

          
          <div className="row mt-2 mb-5">
            <div className="rating w-50">
              <div
                className="modal fade"
                id="ratingModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="ratingModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="ratingModalLabel">
                        Enviar Review
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <ul className="stars">
                        <li className="star">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="star">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="star">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="star">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="star">
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>

                      <textarea
                        name="review"
                        id="review"
                        className="form-control mt3"
                      ></textarea>

                      <button
                        className="btn my-3 float-right review-btn px-4 text-white"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      :<h1>Cargando...</h1>
      }
    </div>
  );
};
