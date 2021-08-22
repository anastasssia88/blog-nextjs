import styled from 'styled-components'

import Avatar from '../Components/Avatar'
import linguanastya from '../public/images/anastasia.png'
import SocialBtns from '../Components/SocialBtns'
import Testimonials from '../Components/about/Testimonials'
import Footer from '../Components/shared/Footer'
import Navbar from "../Components/navbar/Navbar"

import { Section, Main } from "../Components/shared/Wrappers"

 
 
  
const about = () => {
    return (
        <>
            <Section light bgRedCurve>
                <Main>
                <Navbar />
                    <Flex>
                        <div>
                            <h1>Hi, I’m Anastasia</h1>
                            <p>And my goal is to help you become confident when speaking the French language. I’m a web developer who’s fluent in Russian, English, and French. Also, I know some Spanish. In this blog, I share tips and tricks about French and effective learning.</p>
                        </div>
                        <AvatarDiv>
                            <Avatar src={linguanastya} />
                            <SocialBtns primary bluehover/>
                        </AvatarDiv>
                    </Flex>
                </Main>
            </Section>

            <Testimonials /> 
            <Footer />
            
        </>
    );
}

export default about;

// const Curve = styled.div`
//     width: 100%;
//     height: auto;
//     margin-top: -5rem;
//     background:  #EDEBE8;

//     svg {
//         margin-bottom: -0.3rem;
//         width: 100%;
//         fill: #BE4357;
//     }
// `

// const Section = styled.section`
//   background-color: #EDEBE8;
  // background-image:  url(${RedCurve});
  // background-repeat: no-repeat;
  // background-position: bottom center;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `

// const Main = styled.div`
//   padding: 2rem 20rem 20rem 20rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;

//   @media (max-width: 1024px) {
//     height: 100vh;
//     padding: 1rem 10rem;
//   }

//   @media (max-width: 768px) {
//     height: auto;
//     padding: 2rem 2rem;
//   }

//   @media (min-width: 1920px) {
//     padding: 1rem 30rem;
//   }
// `


const Flex = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start; 

    h1{
      color: #314654;

    }

    p{
      color: #314654;
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