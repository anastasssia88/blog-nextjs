import styled from 'styled-components'

const Heading2 = (props) => {
    return (
        <H2 smP={props.smP} >
            {props.content}
        </H2>
    );
}

export default Heading2;

const H2 = styled.h2`
    color: ${ props => props.light ? '#314654' : '#EDEBE8'};
    padding-bottom: ${ props => props.smP && '3rem'};
`