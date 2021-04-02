import styled from 'styled-components'

const Heading1 = (props) => {
    return (
        <H1>
            {props.content}
        </H1>
    );
}

export default Heading1;

const H1 = styled.h1`
    color: ${props => props.light ? '#314654' : '#EDEBE8'};
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

