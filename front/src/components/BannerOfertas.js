import React from 'react'
import Image from 'react-bootstrap/Image'
import oferta from "../recursos/images/sales.jpg"
function BannerOfertas() {
  return (
    <div>
        <Image width={900} src={oferta} />
    </div>
  )
}

export default BannerOfertas