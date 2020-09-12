import React, { useState, useEffect } from 'react'
import { Header, Footer, Button } from '../../components/index'
import { Container, Product, Img, Figcaption, Flex, Price } from './styles'
import exemple from '../../assets/imagem-ficticia.jpg'
import data from './products'

const handleProducts = ({ idProduct, color, description, unitaryValue }) => (
  <Product key={idProduct}>
    <Img src={exemple} />
    <Figcaption>{color}</Figcaption>
    <Flex>
      <Price>R${unitaryValue}</Price>
      <Button>Comprar</Button>
    </Flex>
  </Product>
)

const Main = () => {
  const [pagination, setPaginaton] = useState({
    limit: 9,
    start: 0,
  })
  const [products, setProducts] = useState([])

  function nextPage() {
    setPaginaton({ ...pagination, start: pagination.limit + pagination.start })
  }

  function prevPage() {
    setPaginaton({ ...pagination, start: pagination.limit - pagination.start })
  }

  function handlePagination() {
    const { limit, start } = pagination

    const paginatedProducts = data.filter((item, index) => {
      if (index >= start && index < start + limit) {
        return item
      }
    })

    setProducts(paginatedProducts)
  }

  useEffect(() => {
    handlePagination()
  }, [pagination])

  return (
    <>
      <Header />
      <Container>{products.map(handleProducts)}</Container>
      <Flex className="before-after">
        <Button onClick={prevPage} disabled={pagination.start === 0}>
          Anterior
        </Button>
        <Button
          onClick={nextPage}
          disabled={pagination.start + pagination.limit >= data.length}
        >
          Próxima
        </Button>
      </Flex>
      <Footer />
    </>
  )
}

export default Main
