import React, { Fragment,useEffect, useState  } from 'react'



export const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1)
    const increaseQty = () => {
        const contador = document.querySelector('.count')
  
        if (contador.valueAsNumber>=1) return;
  
        const qty = contador.valueAsNumber+1;
        setQuantity(qty)
     }

     const decreaseQty = () => {
        const contador = document.querySelector('.count')
    
        if (contador.valueAsNumber <= 1) return;
    
        const qty = contador.valueAsNumber-1;
        setQuantity(qty)
     }
  

    return (
        <Fragment>
            <div className='row d-flex justify-content-around'>
                <div className='col-12 col-lg-5 img-fluid' id="imagen_producto">
                    <img clasName="d-block w-100" src="../images/adidas-h5678.jpg" alt='Imagen del producto'></img>
                </div>

                <div className='col-12 col-lg-5'>
                    <h3>Puma Style</h3>
                    <p id='produc_id'>ID del Product #2347876</p>
                    <hr />

                    <div className='rating-outer'>
                        <div className="rating-inner" ></div>
                    </div>
                    <span id='No_de_opiniones'>5 Reviews</span>
                    <hr />
                    <p id="precio_producto">$ 200.000</p>
                    <div className="stockCounter d-inline">
                        <span className="btn btn-danger minus"onClick={decreaseQty}>-</span>
                        <input type="number" className="form-control count d-inline" value={quantity} readOnly />
                        <span className="btn btn-primary plus"onClick={increaseQty}>+</span>
                    </div>
                    <button type="button" id="carrito_btn" className="btn btn-primary d-inline ml-4" >Agregar al Carrito</button>
                    <hr />
                    <p>Estado: <span id="stock_stado" className={-1 > 0 ? 'greenColor' : 'redColor'}>{1 > 0 ? "En existencia" : "Agotado"}</span></p>
                    <hr />
                    <h4 className="mt-2">Descripción:</h4>
                    <p>Producto elaborado en lona de colores claros</p>
                    <hr />
                    <button id="btn_review" type="button" className="btn btn-primary mt-4"
                    data-toggle="modal" data-target="#ratingModal">Deja tu Opinion</button>
                    <div className="alert alert-danger mt-5" type="alert">Inicia sesión para dejar tu review</div>

                    {/*Mensaje emergente para dejar opinion y calificacion*/}
                    <div className="row mt-2 mb-5">
                        <div className="rating w-50">
                            <div className="modal fade" id="ratingModal" tabIndex="-1" role="dialog"
                                aria-labelledby='ratingModalLabel' aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="ratingModalLabel">Enviar Review</h5>
                                            <button type="button" className='close' data-dismiss="modal" aria-label='Close'>
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <ul className="stars">
                                                <li className="star"><i className="fa fa-star"></i></li>
                                                <li className="star"><i className="fa fa-star"></i></li>
                                                <li className="star"><i className="fa fa-star"></i></li>
                                                <li className="star"><i className="fa fa-star"></i></li>
                                                <li className="star"><i className="fa fa-star"></i></li>
                                            </ul>

                                            <textarea name="review" id="review" className="form-control mt3"></textarea>

                                            <button className="btn my-3 float-right review-btn px-4 text-white"
                                                data-dismiss="modal" aria-label="Close">Enviar</button>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>

    )
}
