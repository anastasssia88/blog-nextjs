import styled from 'styled-components'

import Avatar from '../Components/shared/Avatar'
import linguanastya from '../public/images/anastasia.png'
import SocialBtns from '../Components/shared/SocialBtns'
import Testimonials from '../Components/about/Testimonials'
import Footer from '../Components/shared/Footer'
import Navbar from "../Components/navbar/Navbar"

import { Section, Main } from "../Components/shared/Wrappers"

 
 
  
const about = () => {
    return (
        <>
            {/* <Section light bgRedCurve> */}
            <Section light >
                <Main>
                <Navbar />
                <Hero>
                    <h2>Summary</h2>
                    <p>I’m a computational linguist with a bachelor's degree in linguistics and a self-taught web developer with 3 years of experience. I’m passionate about human languages and computers. I'm native in Russian and fluent in English ans French. Fortunately, my job allows me to combine both! At work, I help build the voice of a Russian-speaking voice assistant by applying my knowledge of linguistics, machine learning, and python. </p>
                </Hero>
                <SocialBtns primary bluehover alignLeft/>
                </Main>
            </Section>

            {/* <Testimonials />  */}
            <Footer />
            
        </>
    );
}

export default about;


const Hero = styled.div`

> h2 {
  margin-top: 3rem;
}

> p {
  margin: 1.5rem 0rem;
}
`