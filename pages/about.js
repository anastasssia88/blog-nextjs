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
                <Text sm content="In my blog, I share tips&tricks about French pronunciation,strategies for effective learning, and quality resources. Check out my songs lessons on youtube and you’ll know what I mean." />
                <Text sm content="Before I decided to dive into Tech, I helped more than 700 students to achieve their personal & academic goals. I prepared students for school examinations, helped achieve high grades from 80 to 100, and created highly rated modern French courses based on tv shows and songs. Check out testimonials from my former students below." />
                <SocialBtns />
            </Section>
            <Curve>
                <svg viewBox="0 0 1440 320">
                    <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
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
    width: 100%;
    height: auto;
    margin-top: -5rem;
    background:  #EDEBE8;

    svg {
        margin-bottom: -0.3rem;
        width: 100%;
        fill: #BE4357;
    }
`

const Testimonials = styled.div`
    background: #BE4357;
    height: 100vh;
`

