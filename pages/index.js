import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Link from 'next/link'

// Components
import Heading1 from '../Components/Heading1'
import Heading2 from '../Components/Heading2'
import Text from '../Components/Text'
import SocialBtns from '../Components/SocialBtns'

import linguanastya from '../public/images/anastasia.png'
import circle from '../public/images/circle.png'
import arrowLeft from '../public/images/arrow-left.svg'
import arrowRight from '../public/images/arrow-right.svg'



export default function Home() {
  return (
    <Section>
      <Head>
          <title>FrenchSound</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

        <Menu>
          <Box>
            <Arrow src={arrowLeft} />
            <Link href="#"><a>About</a></Link>
          </Box>
          <Box>
            <Link href="#"><a>Blog</a></Link>
            <Arrow src={arrowRight} />
          </Box>
        </Menu>
      
        
          <Heading1 light content="Do you want to speak French with ease and confidence?"/>
          <Div>
            <Img src={linguanastya} />
          </Div>
          <Text content="Hi, my name is Anastasia. I’m a web developer with linguistics background based in Los Angeles, California. I’m here to help you break speaking barrier, enhance your listening skills, and become confident while speaking French." />
          <SocialBtns />
          
          
    </Section>
  )
}

const Section = styled.section`
  height: 100vh;
  width: 100%;
  background: #314654;
  padding: 2rem 18rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Div = styled.div`
  margin: 2rem;
  height: 220px;
  width: 220px;
  background: url(${circle}) no-repeat;
  background-position: center center;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
  width: 200px;
  height: 200px;
`

const Menu = styled.nav`
  padding-bottom: 3rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    margin: 0 0.5rem;
    font-weight: 300;
    color: #F7F6EB;
    cursor: pointer;
    transition: all 0.4s ease;
  }

  a:hover{
    text-decoration: underline;
  }
`

const Arrow = styled.img`
  width: 22px;
`



// const A = styled.a`
//   margin-left: 0.5rem;
//   font-weight: 300;
//   color: #F7F6EB;
//   cursor: pointer;

//   &:hover {
//     text-decoration: underline;
//   }
// `