import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import { Footer, Logo, Button } from '../../components/index'
import {
  Nav,
  DivFlex,
  Img,
  FigCaption,
  TitleDetails,
  Strongest,
  DivRow,
  Input,
  Border,
  TitlePrice,
  StyledLabel,
  FlexRow,
  DivButtons,
  Link,
} from './styles'
import { handleImage } from '../main/handleImage'

const Product = (props) => {
  const [product, setProduct] = useState({})
  const [paymentDescription, setPaymentDescription] = useState([])
  const [total, setTotal] = useState()
  const [quantity, setQuantity] = useState(0)
  const [cart, setCart] = useState([])

  const loadProduct = async (props) => {
    const { id } = props.match.params
    const { data } = await api.get(`/product?idProduct=${id}`)
    // let localCart = JSON.parse(localStorage.getItem('cart')
    // let cartValue = cart.find((item) => item.idProduct === id)
    // console.log(cartValue)
    setProduct(data[0])
  }

  // const loadQuantity = () => {
  //   const { id } = props.match.params
  //   //create a copy of our cart state, avoid overwritting existing state
  //   let cartCopy = [...cart]

  //   //look for item in cart array
  //   let existentItem = cartCopy.find((cartItem) => cartItem.idProduct == id)

  //   if (!existentItem) return

  //   if (existentItem.qtdd <= 0) {
  //     //remove item  by filtering it from cart array
  //     cartCopy = cartCopy.filter((item) => item.idProduct != { id })
  //   }
  //   console.log('existentItem')
  //   // setQuantity(existentItem.qtdd)
  //   setCart(cartCopy)

  //   let cartString = JSON.stringify(cartCopy)
  //   localStorage.setItem('cart', cartString)
  // }

  //paymentForm
  const loadPaymentForm = async () => {
    const { data } = await api.get('/paymentForm')
    setPaymentDescription(data)
  }

  //list the forms of payment
  const handlePayment = ({ paymentForm, idPaymentForm }) => {
    return (
      <option key={idPaymentForm} value={paymentForm}>
        {paymentForm}
      </option>
    )
  }

  //The addition or subtraction of one product alter the total
  const handleChange = (e) => {
    const { unitaryValue, idProduct } = product
    const {
      target: { value, defaultValue },
    } = e
    setTotal(parseFloat((unitaryValue * value).toFixed(2)))
  }

  // let localCart = localStorage.getItem('cart')
  let localCart = localStorage.getItem('cart')

  //Add item to the local storage
  const addToCart = () => {
    //create a copy of our cart state, avoid overwritting existing state
    if (total === undefined || total <= 0) {
      alert('Digite uma quantidade!')
      return
    }
    let cartCopy = [...cart]

    let quantity = total / product.unitaryValue
    let { idProduct } = product

    let existingItem = cartCopy.find(
      (cartItem) => cartItem.idProduct === idProduct
    )

    const composition = { ...product, total, qtdd: quantity }

    if (existingItem) {
      existingItem.qtdd += composition.qtdd
      existingItem.total += composition.total
    } else {
      //if item doesn't exist, simply add it
      cartCopy.push(composition)
    }

    setCart(cartCopy)

    let stringCart = JSON.stringify(cartCopy)
    localStorage.setItem('cart', stringCart)
    console.log(JSON.parse(localStorage.getItem('cart')))
  }

  useEffect(() => {
    loadProduct(props)
    loadPaymentForm()
    // loadQuantity()
    if (localStorage.getItem('cart'))
      setCart(JSON.parse(localStorage.getItem('cart')))
    // localCart = JSON.parse(localCart)
    //load persisted cart into state if it exists
    if (localCart) localStorage.setItem('cart', localCart)
  }, [product, props])

  const {
    category,
    stock,
    color,
    finishingProcess,
    cubaType,
    description,
    imageLink,
    unitaryValue,
  } = product

  return (
    <>
      <Nav>
        <Logo></Logo>
      </Nav>
      <FlexRow>
        <DivFlex className="flexOne">
          <Img src={handleImage(imageLink)}></Img>
          <FigCaption>{color}</FigCaption>
          <Border>
            <DivRow>
              <div>
                <DivRow>
                  <TitlePrice>
                    R$:
                    {unitaryValue}
                  </TitlePrice>
                </DivRow>
                <DivRow>
                  <StyledLabel htmlFor="qtdd">
                    Quantidade
                    <Input
                      type="number"
                      name="qtdd"
                      min="1"
                      max="10"
                      defaultValue={quantity}
                      onChange={(e) => handleChange(e)}
                    />
                  </StyledLabel>
                </DivRow>
                <DivRow>
                  <select>
                    <option value="-">Formas de Pagamento</option>
                    {paymentDescription.map(handlePayment)}
                  </select>
                </DivRow>
              </div>
              <div>
                <DivButtons>
                  <Link href="/order">
                    <Button onClick={addToCart}>Comprar</Button>
                  </Link>
                  <Button add onClick={addToCart}>
                    Adicionar ao carrinho
                  </Button>
                </DivButtons>
                <DivRow>
                  <TitlePrice>
                    Total R$:
                    {total}
                  </TitlePrice>
                </DivRow>
              </div>
            </DivRow>
          </Border>
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
      <Footer></Footer>
    </>
  )
}

export default Product
