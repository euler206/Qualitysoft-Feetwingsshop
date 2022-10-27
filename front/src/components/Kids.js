import React, { Fragment } from 'react'

export const Kids = () => {
    return (
        <Fragment>
            <h1 id="encabezado_productos">Catalogo Niños</h1>
            
            <section id="productos" className='container mt-5'>
                <div className='row'>
                    {/*Producto 1*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/adidas-n1886.jpg' alt='adidas-n1886'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Adidas Lifestyle Niña</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='No_de_opiniones'>3 reviews</span>
                                </div>
                                <p className='card-text'>$111.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 2*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/adidas-n7659.jpg' alt='adidas-n7659'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Adidas Grand Court Niño</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='No_de_opiniones'>5 reviews</span>
                                </div>
                                <p className='card-text'>$209.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 3*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/bubblegummers-n8405.jpg' alt='bubblegummers-n8405'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Bubblegummers Moisés Niño</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='No_de_opiniones'>2 reviews</span>
                                </div>
                                <p className='card-text'>$53.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 4*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/marvel-n1507.jpg' alt='marvel-n1507'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Marvel Licenses Hercai Niño</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='No_de_opiniones'>3 reviews</span>
                                </div>
                                <p className='card-text'>$95.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 5*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/new-balance-n4450.jpg' alt='new-balance-n4450'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>New Balance Little Niña-</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='No_de_opiniones'>5 reviews</span>
                                </div>
                                <p className='card-text'>$194.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Producto 6*/}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/new-balance-n4686.jpg' alt='new-balance-n4686'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>New Balance Running Rave Niña</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='No_de_opiniones'>2 reviews</span>
                                </div>
                                <p className='card-text'>$209.000</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
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