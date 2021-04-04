import styled from 'styled-components'
import circle from '../public/images/circle.png'


const Avatar = (props) => {
    return (
        <Div src={props.src}>
            <Img src={props.src} />
        </Div>
    );
}

export default Avatar;


const Div = styled.div`
  margin: 2rem;
  height: 220px;
  width: 220px;
  background: url(${circle}) no-repeat;
  background-position: center center;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
  width: 200px;
  height: 200px;
`