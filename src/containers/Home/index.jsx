import React from 'react'
import CountryForm from '../../components/Form'
import Header from '../../components/Header'
import { Container } from './style'

const Home = () => {
  return (
    <Container>
    <Header/>
    <CountryForm/>
    </Container>
  )
}

export default Home