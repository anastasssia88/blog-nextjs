import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

// Components
import Heading1 from '../Components/Heading1'
import Heading2 from '../Components/Heading2'
import Text from '../Components/Text'
// import Linguanastya from '../public/images/anastasia.png'



export default function Home() {
  return (
    <Section>
      <Head>
          <title>FrenchSound</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section >
        <Heading1 light center content="Do you want to speak French with ease and confidence?"/>
        <div>
          {/* <Img src={Linguanastya} /> */}
        </div>
        <Text content="We learn French not to conjugate verbs but to communicate with people.​  Agree? But how to speak if you can’t pronounce each French sound? How to understand if your ears can’t get the difference between similar sounds of French? Sound is the foundation of a language." />
        <Text content="How did you learn your native language when you were a child?  First you picked up sounds and syllables, then words, phrases. Now you speak it fluently. Go to my blog or youtube channel to find out how you can use the same tactic to succeed in French." />
      </Section>

      
    </Section>
  )
}

const Section = styled.section`
  height: 100vh;
  width: 100%;
  background: #314654;
  padding: 3rem 10rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
  width: 100px;
  height: 100px;
`