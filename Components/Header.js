import styled from 'styled-components'
import Link from 'next/link'

const Header = () => {
    return (
        <Menu>
            <Link href="/about"><A>About</A></Link>
            <Link href="/"><A>Home</A></Link>
            <Link href="#"><A>Blog</A></Link>
        </Menu>
    );
}

export default Header;

const Menu = styled.nav`
  padding: 2rem 0rem 5rem 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const A = styled.a`
    margin: 0 0.5rem;
    font-weight: 300;
    color: #314654;
    cursor: pointer;
    transition: all 0.4s ease;
`