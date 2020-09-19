import React, { useState, useEffect } from 'react'
import { Logo, Footer, Button } from '../../components/index'
import {
  Nav,
  Container,
  FlexRow,
  DivFlex,
  Img,
  FigCaption,
  DivRow,
  TitlePrice,
  DivButtons,
  TitleDetails,
  Strongest,
  RemoveButton,
  Link,
} from './styles'
import { handleImage } from '../main/handleImage'

const Order = () => {
  const [cart, setCart] = useState([])

  let localCart = localStorage.getItem('cart')
  console.log(localCart)

  const loadCart = () => {
    setCart(JSON.parse(localStorage.getItem('cart')))
  }

  // const orderItems = JSON.parse(localStorage.getItem('cart'))

  useEffect(() => {
    loadCart()
  }, [])

  const handleOrder = ({
    idProduct,
    category,
    color,
    cubaType,
    description,
    finishingProcess,
    imageLink,
    qtdd,
    stock,
    total,
    unitaryValue,
  }) => {
    const handleRemove = () => {
      console.log(idProduct)
      let cartCopy = [...cart]

      cartCopy = cartCopy.filter((item) => item.idProduct != idProduct)

      setCart(cartCopy)

      let cartString = JSON.stringify(cartCopy)
      localStorage.setItem('cart', cartString)
    }

    return (
      <FlexRow>
        <DivFlex className="flexOne">
          <Img src={handleImage(imageLink)}></Img>
          <FigCaption>{color}</FigCaption>
          <DivRow>
            <TitlePrice>
              Total R$:
              {total}
            </TitlePrice>
          </DivRow>
          <DivButtons>
            <Link href="/">
              <Button>Voltar as compras</Button>
            </Link>
            <RemoveButton onClick={handleRemove}>
              <span role="img" aria-label="sheep">
                &#128465;
              </span>
            </RemoveButton>
          </DivButtons>
        </DivFlex>
        <DivFlex className="flexTwo">
          <TitleDetails>
            <Strongest>Categoria: </Strongest>
            {category}
          </TitleDetails>
          <TitleDetails>
            <Strongest>Quantidade em estoque: </Strongest>
            {stock}
          </TitleDetails>
          <TitleDetails>
            <Strongest>Acabamento: </Strongest>
            {finishingProcess}
          </TitleDetails>
          <TitleDetails>
            <Strongest>Tipo da cuba: </Strongest>
            {cubaType}
          </TitleDetails>
          <TitleDetails>
            <Strongest>Comprimento </Strongest>x<Strongest> Largura </Strongest>{' '}
            x<Strongest> Altura: </Strongest>
            {description}
          </TitleDetails>
        </DivFlex>
      </FlexRow>
    )
  }

  return (
    <>
      <Nav>
        <Logo />
      </Nav>
      <Container>
        {localStorage.getItem('cart') ? (
          cart.map(handleOrder)
        ) : (
          <h1>Não existem itens no carrinho</h1>
        )}
      </Container>
      <Footer />
    </>
  )
}

export default Order
