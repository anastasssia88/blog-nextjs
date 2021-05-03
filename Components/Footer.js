import styled from 'styled-components'
import Link from 'next/link'
import Navbar from './Navbar'
import Section from './shared/Section'
import SocialBtns from './SocialBtns'


const Footer = () => {
    return (
        <Section dark auto smP>
                <Navbar light smP/>
                <SocialBtns primary smM/>
        </Section>
    );
}

export default Footer;



