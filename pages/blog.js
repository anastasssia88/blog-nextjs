import styled from 'styled-components'

// Components
import Heading1 from '../Components/Heading1'
import Heading2 from '../Components/Heading2'
import Text from '../Components/Text'
import SocialBtns from '../Components/SocialBtns'
import Avatar from '../Components/Avatar'
import Section from '../Components/Section'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/blog/Card'



const blog = () => {
    return (
        <>
            <Section light auto>
                    <Navbar />
                    <Heading1 content="Tips & Free French Lessons" />
                    <Text sm mt content="I’m here to help you break speaking barrier, enhance your listening skills, and become confident while speaking French." />
                    <SocialBtns />
            </Section>
            <Section light auto>
                    <Card />
                    <Card />
                    <Card />
            </Section>
            <Footer />
        </>
    );
}

export default blog;