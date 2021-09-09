import styled from 'styled-components'
import SocialBtns from './shared/SocialBtns'
import { Main } from "./shared/Wrappers"

const Footer = () => {
    return (
        <StyledFooter dark auto smP>
            {/* <SocialBtns primary smM/> */}
            <Main>    
                <SocialBtns primary bluehover alignLeft />
            </Main>
        </StyledFooter>
    );
}

export default Footer;

const StyledFooter = styled.footer`
    padding: 2.5rem 0;
    background: #314654;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`



