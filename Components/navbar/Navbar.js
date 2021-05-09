import styled from "styled-components"
import Logo from "./Logo"
import NavItem from "./NavItem"


const Navbar = ({ light }) => { 
    return (
        <Nav light={light}>
            <Logo light={light} />
            <div>
                <NavItem content="About" href="/about" light={light} />
                <NavItem content="Home" href="/" light={light} />
                <NavItem content="Blog" href="/blog" light={light} />
            </div>
        </Nav>
    );
}

export default Navbar;  

const Nav = styled.nav`
    width: 100%;    
    padding: 2rem 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div { 
        display: flex;
        flex-direction: row;
    }
`