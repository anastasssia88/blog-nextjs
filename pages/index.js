import Head from 'next/head'
import styled from 'styled-components'

// Components
import SocialBtns from '../Components/shared/SocialBtns'
import Avatar from '../Components/shared/Avatar'
import Navbar from "../Components/Navbar"
import Btn from "../Components/shared/Btn"
import Wave from "../Components/shared/Wave"

// Images
import linguanastya from '../public/images/anastasia.png'
import { Section, Main } from "../Components/shared/Wrappers"



export default function Home() { 
  return (
    <>
      <Head>
          <title>Anastasia Titova</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Section dark> 
        <Main>
          <Navbar light />
          <Wrapper>
            <section>
              <div>
                <p>Voice Builder / Web Developer</p>
                <h1>Hi, I’m Nastya</h1>
                <p>I enjoy building things and solving problems with JavaScript and Python. Currently helphing to improve a voice assistant technology.</p>
              </div>
              <Btn href="/about" content="Learn more" />
            </section>
            <AvatarDiv>
              <Avatar src={linguanastya} />
              <SocialBtns primary />
            </AvatarDiv>
          </Wrapper>
        </Main>
        <Wave dark />
      </Section>
      
    </>
  )
}

const Wrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    margin-top: 2rem;
    flex-direction: column;
    padding-bottom: 2rem;
  }

  > section {
    display: flex;
    flex-direction: column;
    justify-content:  space-between;
    align-items: flex-start; 

    @media (max-width: 768px) {
      justify-content:  center;
      align-items: center; 
    }

    > div {
      p {
        margin: 1rem 0 2rem 0;
        font-weight: 400;
        font-size: 18px;

        @media (max-width: 768px) {
          font-size: 16px;
          align-self: center;
          text-align: center;
        }
      }

      p:first-child {
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 3px;
        color: rgba(159, 164, 167, 0.49);
        font-weight: 400;
        margin: 0;

        @media (max-width: 768px) {
          font-size: 12px;
        }
      }

      h1, p {
        color: #E5E5E5;
      }

      h1 {
        margin-top: 0.5rem;
        font-size: 52px;
        line-height: 1.1;
        
        @media (max-width: 768px) {
          font-size: 44px;
          align-self: center;
          text-align: center;
        }
      }
    }

  }
`

const AvatarDiv = styled.div`
  margin-left: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; 

  @media (max-width: 768px) {
    margin-left: 0rem;
    margin-top: 3rem;
  }
`


