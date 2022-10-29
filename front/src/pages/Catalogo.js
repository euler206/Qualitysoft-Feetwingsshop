import React, { Fragment, useState } from 'react'
import productos from '../data/productos.json';


export const Catalogo = () => {
    const [data, setData] = useState(productos);
    console.log(data)
    return (
        <Fragment >

            <h1 id="encabezado_productos">Catalogo de productos</h1>

            <section id="productos" className='container mt-5'>
                <div className='row'>
                    {data.map(item => (
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src={item.imagen} alt='adidas-h5678'></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>{item.nombre}</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id='No_de_opiniones'>{item.reviews.length}</span>
                            </div>
                            <p className='card-text'>{item.precio}</p><a href='http://localhost:3000' id='view_btn' className='btn btn-block'>
                                Ver detalle
                            </a>
                        </div>
                        </div>
                    </div>))}

                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>

                    </div>
                </div>
            </section>
        </Fragment>
    )
}
