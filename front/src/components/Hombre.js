import React, { Fragment } from 'react'

export const Hombre = () => {
  return (
    <Fragment>
        <h1 id="encabezado_productos"> Catalogo Hombres </h1>

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
                            <p className='card-text'>$190.000</p><a href='http://localhost:3000' id="ver_producto" className='btn btn-block'>
                                Ver detalle
                            </a>
                        </div>
                    </div>
                </div>

                {/*Producto 2*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img src="./images/nike-h9018.jpg" alt='nike-h9018'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href='http://localhost:3000'>Nike Lifestyle Hombre</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outert'>
                                    <div className='raiting-inner'></div>
                                </div>
                                <span id='No_ede_opiniones'> 5 reviews</span>
                            </div>
                            <p className='card-text'>$299.000</p><a href='http://localhost:3000' id="ver_producto" className='btn btn-block'>
                                Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
                {/*Producto 3*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img src="./images/poloclub-h9632.jpg" alt='poloclub-h9632'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href='http://localhost:3000'>Polo Club Royal County Hombre</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outert'>
                                    <div className='raiting-inner'></div>
                                </div>
                                <span id='No_ede_opiniones'> 2 reviews</span>
                            </div>
                            <p className='card-text'>$150.000</p><a href='http://localhost:3000' id="ver_producto" className='btn btn-block'>
                                Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
                {/*Producto 4*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img src="./images/puma-h7177.jpg" alt='puma-h7177'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href='http://localhost:3000'>Puma Lifestyle Multicolor Hombre</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outert'>
                                    <div className='raiting-inner'></div>
                                </div>
                                <span id='No_ede_opiniones'> 4 reviews</span>
                            </div>
                            <p className='card-text'>$299.000</p><a href='http://localhost:3000' id="ver_producto" className='btn btn-block'>
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
export default Hombre

