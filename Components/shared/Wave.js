import styled from 'styled-components'
import lightBlueWave from '../../public/images/blue-wave.svg'
import darkBlueCurve from "../../public/images/curve-blue.svg"

const Wave = ({ light, dark}) => {
    return (
        <Wrapper light={light} dark={dark} >
            
        </Wrapper>
    );
}

export default Wave;

const Wrapper = styled.div`
  width: 100%;
  background-color: #EDEBE8;
  background-image: ${ props => props.light ? `url(${lightBlueWave})` : `url(${darkBlueCurve})`};
  min-height: ${ props => props.light ? '300px' : '200px'};
  background-repeat: no-repeat;
  background-size: cover;
`