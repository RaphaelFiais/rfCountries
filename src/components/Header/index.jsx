import React from 'react'
import { BsMoonFill } from 'react-icons/bs'
import { Container } from './style'
const Header = () => {
  return (
    
        <Container>
            <h1>
                Where in the world?
            </h1>
            <button>
                <BsMoonFill/>
                <p>Dark mode</p>
            </button>
        </Container>
   
  )
}

export default Header