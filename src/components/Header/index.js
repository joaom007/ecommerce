import React, { useState, useEffect } from 'react'
import { Input, Button, DropDown, Logo } from 'components'
import { Nav, Link, GreenNumber } from './styles'

const Header = () => {
  const [quantity, setQuantity] = useState(0)

  const handleQuantity = () => {
    if (localStorage.getItem('cart')) {
      setQuantity(JSON.parse(localStorage.getItem('cart')).length)
    }
  }

  useEffect(() => {
    handleQuantity()
  }, [quantity])

  return (
    <header>
      <Nav>
        <div>
          <Logo>MGAJ</Logo>
        </div>
        <div>
          <Input placeholder="pesquisar por produto..."></Input>
          <Button>Pesquisar</Button>
        </div>
        <div style={{ display: 'flex' }}>
          <Link href="/order">
            <Button>
              Carrinho
              <span role="img" aria-label="sheep">
                &#128722;
              </span>
              <GreenNumber>{quantity}</GreenNumber>
            </Button>
          </Link>
          <Link href="/login">
            <Button primary>Login</Button>
          </Link>
          <DropDown></DropDown>
        </div>
      </Nav>
    </header>
  )
}

export default Header
