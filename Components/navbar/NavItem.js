import styled from "styled-components"
import Link from 'next/link'

const NavItem = ({ href, content, light, active }) => {
    return (
        <Link href={href} >
            <Div light={light} active={active}>
                { content }
            </Div>
        </Link>
    ); 
}

export default NavItem;

const Div = styled.div`
    color: #314654;
    font-size: 18px;
    font-family: 'Karla', sans-serif;
    margin-left: 4rem;
    cursor: pointer;
    letter-spacing: 1.1px;
    padding-bottom: 10px;
    transition: all 0.3s ease;
    color: ${ props => props.light && "#EDEBE8"};
    border-bottom: ${ props => props.active && "1px solid #C4C4C4"};

    &:hover{
        color: #BE4357;
    }
`