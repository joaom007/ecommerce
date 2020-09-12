import React from 'react'
import { Footer, Logo } from '../../components/index'
import {
  Nav,
  Main,
  Portfolio,
  Figure,
  Img,
  Figcaption,
  Article,
  Title,
  Item,
  List,
  Paragraph,
  Link,
} from './styles'
import anglo from 'assets/anglo-tatui.jpg'
import bt from 'assets/bt-tatui.jpg'
import bunge from 'assets/bunge.jpg'
import habibs from 'assets/habibs.jpg'
import imobiliariaMantovani from 'assets/imobiliaria-mantovani.jpg'
import tribodoAcai from 'assets/tribo-do-acai.jpg'
import tropical from 'assets/tropical.jpg'

const handleArticle = ({ title, paragraph, itens }, index) => (
  <Article key={`title-${index}`}>
    <Title>{title}</Title>
    <Paragraph>{paragraph}</Paragraph>
    {itens && (
      <List>
        {itens.map((item, index) => (
          <Item key={`item-${index}`}>{item}</Item>
        ))}
      </List>
    )}
  </Article>
)

const articleItens = [
  {
    title: 'Quem somos?',
    paragraph:
      'A Marmoraria Tatuí é uma empresa que sempre está buscando garantir a melhor qualidade em produtos e serviços. Está no mercado há 14 anos oferecendo a mais completa linha de mármores e granitos – nacionais e importados - com qualidade e atendimento que o público consumidor deseja e merece.',
  },
  {
    title: 'O que fazemos?',
    paragraph:
      'Trabalhamos com designs modernos que unem praticidade à beleza. Executamos projetos e ideais visando atender às necessidades e desejos dos mais refinados estilos, adaptando qualidade e agilidade aos prazos de entrega. Trabalhamos com os mais variados tipos de Mármores e Granitos. Devido à facilidade em adquirirmos pedras brutas para lapidação, tanto em padrões nacionais quanto importados, atendemos a qualquer tipo de demanda, concluindo grandes obras ou até mesmo criando peças decorativas sob medidas, padrões e encomendas especiais. Trabalhamos com pias, soleiras, lavatórios, pisos, escadas, mesas, balcões, etc... com os mais variados tipos de acabamentos.',
  },
  {
    title: 'Missão',
    paragraph:
      'Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at it. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at it',
  },
  {
    title: 'Visão',
    paragraph:
      'Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at it. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at it',
  },
  {
    title: 'Valores',
    itens: [
      'Integridade',
      'Honestidade',
      'Aprimoramento Contínuo',
      'Comprometimento',
    ],
  },
]

const About = () => (
  <>
    <Nav>
      <Link href="/">
        <Logo>MGAJ</Logo>
      </Link>
    </Nav>
    <Main>
      <div>{articleItens.map(handleArticle)}</div>
      <Title customers>Nossos parceiros</Title>
      <Portfolio>
        <Figure>
          <Img src={anglo} alt="monkey" />
          <Figcaption>Anglo Tatuí</Figcaption>
        </Figure>
        <Figure>
          <Img src={bt} alt="eagle" />
          <Figcaption>Bt Tatuí</Figcaption>
        </Figure>
        <Figure>
          <Img src={bunge} alt="bird" />
          <Figcaption>Bunge</Figcaption>
        </Figure>
        <Figure>
          <Img src={habibs} alt="bear" />
          <Figcaption>Habib's</Figcaption>
        </Figure>
        <Figure>
          <Img src={imobiliariaMantovani} alt="swan" />
          <Figcaption>Imobiliária Mantovani</Figcaption>
        </Figure>
        <Figure>
          <Img src={tribodoAcai} alt="elephants" />
          <Figcaption>Tribo do Açai</Figcaption>
        </Figure>
        <Figure>
          <Img src={tropical} alt="owl" />
          <Figcaption>Restaurante tropical</Figcaption>
        </Figure>
      </Portfolio>
    </Main>
    <Footer />
  </>
)

export default About
