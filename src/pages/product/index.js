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
} from './styles'
import { handleImage } from '../main/handleImage'

const Product = (props) => {
  const [product, setProduct] = useState({})
  const [paymentDescription, setPaymentDescription] = useState([])
  const loadProduct = async (props) => {
    const { id } = props.match.params
    const { data } = await api.get(`/product?idProduct=${id}`)
    setProduct(data[0])
  }

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

  useEffect(() => {
    loadProduct(props)
    loadPaymentForm()
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
                    <Input type="number" name="qtdd" min="1" max="10" />
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
                <DivRow>
                  <Button>Comprar</Button>
                </DivRow>
                <DivRow>
                  <TitlePrice>
                    Total R$:
                    {unitaryValue}
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
