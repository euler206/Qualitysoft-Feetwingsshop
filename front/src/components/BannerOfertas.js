import React from 'react'
import Image from 'react-bootstrap/Image'
import oferta from "../recursos/images/sales.jpg"
import oferta2 from "../recursos/images/sales2.jpg"
import oferta3 from "../recursos/images/sales3.jpg"
import Carousel from 'react-bootstrap/Carousel';
function BannerOfertas() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={oferta}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Black iday</h3>
          <p>Aprovecha las Mejores Ofertas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={oferta2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Descuentos en todas Nuestras Marcas</h3>
          <p>Todos los Medios de Pago.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={oferta3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Aprovecha !!!!!!!!!</h3>
          <p>
            .
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default BannerOfertas