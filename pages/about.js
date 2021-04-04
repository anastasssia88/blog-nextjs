import styled from 'styled-components'
import Header from '../Components/Header'
import Heading1 from '../Components/Heading1'
import Avatar from '../Components/Avatar'
import linguanastya from '../public/images/anastasia.png'
import circle from '../public/images/circle.png'
import Text from '../Components/Text'
import SocialBtns from '../Components/SocialBtns'
import aboutCurve from '../public/images/about-curve.svg'





const about = () => {
    return (
        <>
            <Section>
                <Header />
                <Heading1 content="Coucou mes chers amis!" />
                <Avatar src={linguanastya}/>
                <Text sm content="Hello everyone! It's Anastasia speaking to you. I’m a web developer with a bachelor's degree in linguistics. I’m very confident in speaking Russian, English, French. my goal is to help you make French your ’second nature’." />
                <Text sm content="Before I decided to dive into Tech, I helped more than 700 students to achieve their personal & academic goals. I prepared students for school examinations, helped achieve high grades (from 80 to 100), and created highly rated (5/5) modern French courses based on tv shows and songs." />
                <Text sm content="On my youtube channel and in my blog, I share tips&tricks about French pronunciation, effective learning. Check out my songs lessons on youtube and you’ll know what I mean." />
                <SocialBtns />
            </Section>
            <Curve>
                <img src={aboutCurve} alt=""/>
            </Curve>
            <Testimonials />
        </>
    );
}

export default about;

const Section = styled.section`
  width: 100%;
  background: #EDEBE8;
  padding: 2rem 20rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    height: 100vh;
    padding: 1rem 10rem;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 2rem;
  }
`

const Curve = styled.div`
    padding-top: 4rem;
    width: 100%;
    height: auto;
    background:  #EDEBE8;

    img {
        margin-bottom: -0.3rem;
        width: 100%;
    }
`

const Testimonials = styled.div`
    background: #BE4357;
    height: 100vh;
`

