import styled from "styled-components"
import Link from 'next/link'

const Logo = ({ light }) => {
    return (
        <Link href="/">
            <Div light={light}>
                <span>french</span>sound
            </Div>
        </Link>
    );
}

export default Logo; 

const Div = styled.div`
    font-family: 'Poppins', sans-serif;
    color: #314654;
    color: ${props => props.light && "#C4C4C4"};
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    span {
        color: #BE4357;
    }
`