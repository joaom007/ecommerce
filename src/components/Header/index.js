import React from 'react'
import { Input, Button, DropDown, Logo } from 'components'
import { Nav, Link } from './styles'

const Header = () => (
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
        <Button cart>C</Button>
        <Link href="/login">
          <Button primary>Login</Button>
        </Link>
        <DropDown></DropDown>
      </div>
    </Nav>
  </header>
)

export default Header
