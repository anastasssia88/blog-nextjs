import styled from 'styled-components'
import Section from '../Section'
import Card from './Card'


const Testimonials = () => {
    return (
        <Section redGradient auto mdP>
            <Card content="Hello everyone! It's Anastasia speaking to you. I’m a web developer with a bachelor's degree in linguistics. I’m very confident in speaking Russian, English, French. my goal is to help you make French your ’second nature" name="- Natalie" />
            <Box>
                <Card content="Hello everyone! It's Anastasia speaking to you. I’m a web developer with a bachelor's degree in linguistics. I’m very confident in speaking Russian, English, French. my goal is to help you make French your ’second nature" name="- Natalie" />
                <Card content="Hello everyone! It's Anastasia speaking to you. I’m a web developer with a bachelor's degree in linguistics. I’m very confident in speaking Russian, English, French. my goal is to help you make French your ’second nature" name="- Natalie" />
            </Box>
        </Section>
    );
}

export default Testimonials;

const Box = styled.div`
    display: flex;
    flex-direction: row;
`