import styled from 'styled-components'

const Text = ({content}) => {
    return (
        <P>
            {content}
        </P>
    );
}

export default Text;

const P = styled.p`
    color: ${ props => props.light ? '#314654' : '#EDEBE8'};
    font-size: ${ props => props.sm ? '16px' : '22px'};
    font-weight: 300;
    padding: 0.5rem 0rem;
`