import styled from 'styled-components'
import Section from '../shared/Section'
import Card from './Card'
import Heading2 from '../Heading2'


const Testimonials = () => {
    return ( 
        <Section redGradient auto mdP>
            <Content>
                <span />
                <h2>Testimonials</h2>
                <p>from my students</p>
            </Content>

            <Card quotes content="Anastasia, thank you very much! I used to be afraid to speak French. I wasn't sure about my pronunciation. Now I'm confident in each sound. It feels so good! Thanks to you I've built a strong foundation. It's up to me now. I'll continue working on pronunciation." name="- Marina" />
            <Box>
                <Card content="I had a lot of French teachers but nobody ever gave me this information! I'm terribly glad to have enrolled. At the beginning I thought I wouldn't probably learn anything new. But there was so much there😳" name="- Stanislava" />
                <Card content="After the lessons, I see a tremendous difference in my pronunciation before and after. A tremendous amount of work has been done and it would have been impossible without you. I became much more confident in speaking and reading in French!" name="- Yaroslavna" />
            </Box>
        </Section>
    );
}

export default Testimonials;

const Box = styled.div`
    display: flex;
    flex-direction: row;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    span {
        border-top: 2px solid #EDEBE8;    
        width: 6rem;
        padding-top: 1.5rem;
    }

    h2 {
        color: #EDEBE8;
        font-size: 42px;
    }

    p {
        color: rgba(237, 235, 232, 0.60);
        font-size: 20px;
        letter-spacing: 1.2px;
    }
`