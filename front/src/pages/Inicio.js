import React from 'react'
import { Container } from 'react-bootstrap'
import BannerOfertas from '../components/BannerOfertas'
import UltimosAgregados from '../components/UltimosAgregados'




function Inicio() {
  return (
    <Container className='text-center'>
      <BannerOfertas/>      
      <UltimosAgregados />
    </Container>
  )
}

export default Inicio