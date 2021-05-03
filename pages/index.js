import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Link from 'next/link'

// Components
import Heading1 from '../Components/Heading1'
import Heading2 from '../Components/Heading2'
import Text from '../Components/Text'
import SocialBtns from '../Components/SocialBtns'
import Avatar from '../Components/Avatar'
// import Section from '../Components/shared/Section'

import linguanastya from '../public/images/anastasia.png'
import circle from '../public/images/circle.png'
import arrowLeft from '../public/images/arrow-left.svg'
import arrowRight from '../public/images/arrow-right.svg'

// New
import Navbar from "../Components/navbar/Navbar"
import Btn from "../Components/shared/Btn"
import BlueCurve from "../public/images/curve-blue.svg"



export default function Home() { 
  return (
    <>
      <Head>
          <title>FrenchSound</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

        {/* <Menu>
          <Box>
            <Arrow src={arrowLeft} />
            <Link href="/about"><a>About</a></Link>
          </Box>
          <Box>
            <Link href="/blog"><a>Blog</a></Link>
            <Arrow src={arrowRight} />
          </Box>
        </Menu> */}
      
      <Section dark>
        <Main>
          <Navbar lightLogo />
            <Flex>
              <div>
                <h1>Do you want to speak French with ease and confidence?</h1>
                <p>My name is Anastasia. I’m here to help you break speaking barrier and become fluent in French.</p>
                <Btn href="/about" content="Learn more" />
              </div>
              <AvatarDiv>
                <Avatar src={linguanastya} />
                <SocialBtns primary />
              </AvatarDiv>
            </Flex>
          </Main>
          
          <StyledDiv />
      </Section>
      
    </>
  )
}


const Section = styled.section`
  height: 100vh;
  background: #314654;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Main = styled.div`
  padding: 2rem 20rem 0rem 20rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1024px) {
    height: 100vh;
    padding: 1rem 10rem;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 2rem;
  }

  @media (min-width: 1920px) {
    padding: 1rem 30rem;
  }
`

const StyledDiv = styled.div`
  /* min-height: 400px; */
  min-height: 200px;
  width: 100%;
  background-color: #EDEBE8;
  background-image: url(${BlueCurve});
  background-repeat: no-repeat;
  background-size: cover;
`



const Flex = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start; 

    h1{
      color: #E5E5E5;

    }

    p{
      color: #E5E5E5;
      font-size: 20px;
      margin: 2rem 0px;
      font-weight: 400;
    }
`

const AvatarDiv = styled.div`
  margin-left: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; 
`


