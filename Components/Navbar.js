import styled from "styled-components"
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";

import Logo from "./navbar/Logo"
import NavItem from "./navbar/NavItem"


const Navbar = ({ light }) => { 
    const router = useRouter()
    const [path, setPath] = useState(router.route);

    useEffect(() => {
        setPath(router.route);
      }, [router.route]);

    return (
        <Nav light={light} >
            <Logo light={light} />
            <div>
                <NavItem content="Home" path={path} href="/" light={light} />
                <NavItem content="About" path={path} href="/about" light={light} />
                {/* <NavItem content="Blog" path={path} href="/blog" light={light} /> */}
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

    > div { 
        display: flex;
        flex-direction: row;
    }
`