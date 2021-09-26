import styled from "styled-components"
import Link from 'next/link'
import { useState, useEffect } from "react";


const NavItem = ({ content, path, href, light, active }) => {
    const [ isActive, setIsActive ] = useState(false)

    useEffect(() => {
        if (href === path) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }, [href, path]);


    return (
        <Link href={href} isActive={isActive}>
            <Div light={light} isActive={isActive}>
                { content }
            </Div>
        </Link>
    ); 
}

export default NavItem;

const Div = styled.div`
    color: #314654;
    margin-left: 4rem;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    letter-spacing: 1.1px;
    padding-bottom: 10px;
    color: ${ props => props.light && "#EDEBE8"};
    color:  ${ props => props.isActive && "#BE4357"};

    transition: all 0.3s ease;

    @media (max-width: 768px) {
        margin-left: 0rem;
        margin: 0rem 1rem;
    }

    &:hover{
        color: #BE4357;
    }
`