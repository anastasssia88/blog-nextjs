import styled from "styled-components"

export const H1 = styled.h1`
    color: ${props => props.light ? '#E5E5E5' : '#314654'};
    text-align: center;

    @media (max-width: 768px) {
        font-size: 36px;
        line-height: 1.3;
    }

    @media (max-width: 1024px) {
        font-size: 42px;
        line-height: 1.1;
    }
`

export const H2 = styled.h2`
    color: ${ props => props.light ? '#314654' : '#EDEBE8'};
    padding-bottom: ${ props => props.smP && '3rem'};
`

export const P = styled.p`
    color: ${ props => props.light && "#EDEBE8"};
    color: ${ props => props.dark && "#314654"};
    font-size: ${ props => props.sm && "16px"};
    font-size: ${ props => props.md && "20px"};;

`