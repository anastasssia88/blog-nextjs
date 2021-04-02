import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Link from 'next/link'

// Components
import Heading1 from '../Components/Heading1'
import Heading2 from '../Components/Heading2'
import Text from '../Components/Text'
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
          <div>
            <Img src={linguanastya} />
          </div>
          <Text content="We learn French not to conjugate verbs but to communicate with people.​  Agree? But how to speak if you can’t pronounce each French sound? How to understand if your ears can’t get the difference between similar sounds of French? Sound is the foundation of a language." />
          <Text content="How did you learn your native language when you were a child?  First you picked up sounds and syllables, then words, phrases. Now you speak it fluently. Go to my blog or youtube channel to find out how you can use the same tactic to succeed in French." />
          
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

const Img = styled.img`
  width: 200px;
  height: 200px;
`

const Menu = styled.nav`
  padding-bottom: 2rem;
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