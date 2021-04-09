import styled from 'styled-components'
import Cover from '../public/images/read-in-french.jpg'

// Components
import Heading1 from './Heading1'
import Heading2 from './Heading2'
import Text from './Text'
import SocialBtns from './SocialBtns'
import Avatar from './Avatar'
import Section from './Section'
import Navbar from './Navbar'
import Footer from './Footer'


function Post({ date, image, title, category, content, excerpt }) {
    let { file, description } = image

    console.log(image)
    return (
        <Div>
            <img alt={description} src={`https:${file.url}`} />
            <Content>
                <h3>{title}</h3>
                <Text xs content={date.substring(0, 10)} />
                {/* <Text xs content={category} /> */}
                <Text sm content={excerpt} />
            </Content>
        </Div>

    )
  }
  
  export default Post

  const Div = styled.div`
  width: 100%;
  background: #EDEBE8;
  padding: 2rem 0rem;
  margin: 1rem 0rem;
  border-bottom: 2px solid #E5E4E1;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: all 0.4s ease;

  &:hover{
      transform: scale(1.02, 1.02);
      
  }
  
  img {
      object-fit: cover;
      width: 40%;
      height: 250px;
      box-shadow: 0px 0px 8px 8px rgba(0, 0, 0, 2%);
  }
`

// !How i will set img to post
// object-fit: cover;
// width: 100%;
// height: 15rem;

const Content = styled.div`
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 1rem;
`
  