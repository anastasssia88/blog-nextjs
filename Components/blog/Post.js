import styled from 'styled-components'
import Cover from '../../public/images/read-in-french.jpg'

// Components
import Heading1 from '../Heading1'
import Heading2 from '../Heading2'
import Text from '../Text'
import SocialBtns from '../SocialBtns'
import Avatar from '../Avatar'
import Section from '../Section'
import Navbar from '../Navbar'
import Footer from '../Footer'


const Post = () => {
    return (
        <Div>
            <img src={Cover} alt=""/>
            <Content>
                <h3>How to speak with confidence and ease</h3>
                <Text xs content="Postend on March 20, 2021 " />
                <Text sm content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..." />
            </Content>
        </Div>
    );
}

export default Post;

const Div = styled.div`
    width: 100%;
    background: #EDEBE8;
    padding: 2rem 0rem;
    margin: 1rem;
    border-bottom: 2px solid #E5E4E1;
    

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    transition: all 0.4s ease;

    &:hover{

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

