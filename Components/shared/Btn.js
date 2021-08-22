import styled from "styled-components"
import Link from 'next/link'


const Btn = ({ href, content }) => {
    return (
        <Link href={href}>
        <Button>
            {content}
        </Button>
        </Link>
    );
}

export default Btn;

const Button = styled.button`
    background: #BE4357;
    color: #EDEBE8;
    font-weight: 400;
    border-radius: 50px;
    border: none;
    min-width: 150px;
    max-width: auto;
    padding: 10px 20px;
    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover {
        color: #EDEBE8;
        background: #395466; 
        transform: scale(1.1, 1.1)
    }
`