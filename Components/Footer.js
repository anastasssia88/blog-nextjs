import styled from 'styled-components'
import SocialBtns from './shared/SocialBtns'

const Footer = () => {
    return (
        <StyledFooter dark auto smP>
            <SocialBtns primary smM/>
        </StyledFooter>
    );
}

export default Footer;

const StyledFooter = styled.footer`
    padding: 2.5rem 20rem;
    background: #314654;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`



