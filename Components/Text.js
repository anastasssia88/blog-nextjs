import styled from 'styled-components'

const Text = ({content, light, sm, i, mt, xs}) => {
    return (
        <P light={light} sm={sm} i={i} mt={mt} xs={xs} >
            {content}
        </P>
    );
}

export default Text;

const P = styled.p`
    color: ${ props => props.light ? '#E5E5E5' : '#314654'};
    font-size: ${ props => props.sm ? '20px' : '22px'};
    font-size: ${ props => props.xs && '16px'};
    color: ${ props => props.xs && 'gray'};

    font-style: ${props => props.i && 'italic'};
    font-weight: 300;
    padding: 0.5rem 0rem;
    margin-top: ${props => props.mt && '2rem'};

`