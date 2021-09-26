import styled from "styled-components"
import Link from 'next/link'

const Logo = ({ light }) => {
    return (
        <Wrapper>
        <Link href="/">
            <Div light={light}>
                <span>Anastasia</span>Titova
            </Div>
        </Link>
        </Wrapper>
    );
}

export default Logo; 

const Wrapper = styled.div`
`


const Div = styled.div`
    font-family: 'Poppins', sans-serif;
    color: #314654;
    color: ${props => props.light && "#C4C4C4"};
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;

    span {
        color: #BE4357;
    }

    @media (max-width: 768px) {
        display: none;
    }
`