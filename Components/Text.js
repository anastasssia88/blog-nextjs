import styled from 'styled-components'

const Text = (props) => {
    return (
        <P light={props.light} sm={props.sm} i={props.i} >
            {props.content}
        </P>
    );
}

export default Text;

const P = styled.p`
    color: ${ props => props.light ? '#E5E5E5' : '#314654'};
    font-size: ${ props => props.sm ? '20px' : '22px'};
    font-style: ${props => props.i && 'italic'};
    font-weight: 300;
    padding: 0.5rem 0rem;

`