import React, { Fragment } from 'react'
import productos from "../data/productos.json";
import { Link } from "react-router-dom";


export const Novedades = () => {
  return (
    <Fragment>
        <h1 id="encabezado_productos"> Ultimas Novedades </h1>

        <section id="productos" className='container mt-5'>
            <div className='row'>
                {
                    productos.slice(0, 4).reverse().map(item =>(
                        <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img src={item.imagen} alt='adidas-h5678'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href='http://localhost:3000'>{item.nombre}</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='No_ede_opiniones'> 5 Reviews</span>
                            </div>
                            <p className='card-text'>{item.precio}</p><Link
                    to={`/producto?idProducto=${item.id}`}
                    id="view_btn"
                    className="btn btn-block"
                  >
                    Ver detalle
                  </Link>
                        </div>
                    </div>
                </div>
                    ))
                }
                

                
                
            </div>
            
    

        </section>

    </Fragment>

  )
}
export default Novedades
