import styled from 'styled-components'
import Section from '../Section'
import Card from './Card'


const Testimonials = () => {
    return (
        <Section redGradient>
            <Card content="Hello everyone! It's Anastasia speaking to you. I’m a web developer with a bachelor's degree in linguistics. I’m very confident in speaking Russian, English, French. my goal is to help you make French your ’second nature" name="- Natalie" />
        </Section>
    );
}

export default Testimonials;

// const Section = styled.section`
//     background: linear-gradient(to bottom, #BE4357, #6A2F38);
//     height: 100vh;
// `