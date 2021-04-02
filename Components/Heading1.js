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
`

