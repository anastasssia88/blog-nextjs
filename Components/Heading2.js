import styled from 'styled-components'

const Heading2 = ({content}) => {
    return (
        <H2>
            {content}
        </H2>
    );
}

export default Heading2;

const H2 = styled.h2`
    color: ${ props => props.light ? '#314654' : '#EDEBE8'};
`