import React, { Fragment } from 'react'

export const Novedades = () => {
  return (
    <Fragment>
        <h1 id="encabezado_productos"> Ultimas Novedades </h1>

        <section id="productos" className='container mt-5'>
            <div className='row'>
                {/*Producto 1*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img src="./images/adidas-h5678.jpg" alt='adidas-h5678'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href='http://localhost:3000'>Adidas Performance Hombre</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outert'>
                                    <div className='raiting-inner'></div>
                                </div>
                                <span id='No_ede_opiniones'> 5 reviews</span>
                            </div>
                            <p className='card-text'>$190.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalle
                            </a>
                        </div>
                    </div>
                </div>

                {/*Producto 2*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img src="./images/adidas-m9654.jpg" alt='adidas-m9654'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href='http://localhost:3000'>Adidas Running Mujer</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outert'>
                                    <div className='raiting-inner'></div>
                                </div>
                                <span id='No_ede_opiniones'> 4 reviews</span>
                            </div>
                            <p className='card-text'>$210.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
                {/*Producto 3*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img src="./images/adidas-n7659.jpg" alt='adidas-n7659'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href='http://localhost:3000'>Adidas Breaknet Niño</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outert'>
                                    <div className='raiting-inner'></div>
                                </div>
                                <span id='No_ede_opiniones'> 3 reviews</span>
                            </div>
                            <p className='card-text'>$260.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </section>

    </Fragment>

  )
}
export default Novedades
