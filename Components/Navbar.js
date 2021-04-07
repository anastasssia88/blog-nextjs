import styled from 'styled-components'
import Link from 'next/link'


const Header = (props) => {
    return (
        <Menu smP={props.smP} light={props.light} >
            <Link href="/about"><A light={props.light}>About</A></Link>
            <Link href="/"><A light={props.light}>Home</A></Link>
            <Link href="/blog"><A light={props.light}>Blog</A></Link>
        </Menu>
    );
}

export default Header;

const Menu = styled.nav`
  padding: ${props => props.smP ? '0rem 0rem 0rem 0' : '2rem 0rem 5rem 0'};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const A = styled.a`
    margin: 0 0.5rem;
    font-weight: 300;
    color: ${props => props.light ? '#EDEBE8' : '#314654'};
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover{
        color: #BE4357;
        font-weight: 500;
    }
`