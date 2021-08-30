import Head from 'next/head'
import styled from 'styled-components'

import SocialBtns from '../Components/shared/SocialBtns'
import Avatar from '../Components/shared/Avatar'
import linguanastya from '../public/images/anastasia.png'

// New
import Navbar from "../Components/navbar/Navbar"
import Btn from "../Components/shared/Btn"
import BlueCurve from "../public/images/curve-blue.svg"
import { Section, Main } from "../Components/shared/Wrappers"



export default function Home() { 
  return (
    <>
      <Head>
          <title>41pixel</title>
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
          <Navbar light />
          <Wrapper>
            <section>
              <div>
                <p>Computational linguist</p>
                <h1>Hi, I’m Anastasia</h1>
                <p>I help build a voice assistant technology. Passionate about web development, Machine Learning, and philosophy.</p>
              </div>
              <Btn href="/about" content="Learn more" />
            </section>
            <AvatarDiv>
              <Avatar src={linguanastya} />
              <SocialBtns primary />
            </AvatarDiv>
          </Wrapper>
        </Main>
          
          <StyledDiv />
      </Section>
      
    </>
  )
}

const StyledDiv = styled.div`
  min-height: 200px;
  width: 100%;
  background-color: #EDEBE8;
  background-image: url(${BlueCurve});
  background-repeat: no-repeat;
  background-size: cover;
`

const Wrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  /* justify-content:  space-between;
  align-items: space-between;  */

  > section {
    display: flex;
    flex-direction: column;
    justify-content:  space-between;
    align-items: flex-start; 

    > div {
      p {
        margin: 1rem 0 2rem 0;
        font-weight: 400;
        font-size: 18px;
      }

      p:first-child {
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 3px;
        color: rgba(159, 164, 167, 0.49);
        font-weight: 400;
        margin: 0;
      }
      h1, p {
        color: #E5E5E5;
      }
      h1 {
        margin-top: 0.5rem;
        font-size: 52px;
        line-height: 1.1;
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
`


