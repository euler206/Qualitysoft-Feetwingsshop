import React from 'react'
import BannerOfertas from '../components/BannerOfertas'
import Novedades from '../components/Novedades'



function Inicio() {
  return (
    <div className='text-center'>
      <BannerOfertas/>
      <Novedades/>     
    </div>
  )
}

export default Inicio