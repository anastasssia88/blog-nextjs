import React from 'react'
import styled from 'styled-components'
import Voice from '../../public/images/voice.jpeg'


const Card = ({ type, data }) => {
    let { id, title, date, content, tags, image } = data;
    let newContent = content.split("; ")

    return (
        <Container key={id} type={type} >
            <Title>
                <h3>{title}</h3>
                <p>{date}</p>
            </Title>
            {
                newContent.length > 1 ? 
                    (newContent.map( item => 
                        <p key={item}>- {item}</p>
                    ))
                :
                    (newContent.map( item => 
                        <p key={item}>{item}</p>
                    ))
            }
            {/* <img src={Voice} alt="siri voice biulding engineer" width="100%" height="50%" /> */}
            <div>
                {
                    tags.map( tag => <Tag type={type} key={tag}>{tag}</Tag>)
                }
            </div>
            {
                type === "project" && 
                <a href="/">Live Demo</a>
            }
        </Container>
    )
}

export default Card
  
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 80%;
    margin: 4rem 0;

    > div {
        display: flex;
        flex-direction: row;
    }

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    /* styles for project box */
    box-shadow: ${ props => props.type == "project" && "0px 2px 10px 4px #E3E3E3"};
    border-radius: ${ props => props.type == "project" && "10px"};
    padding: ${ props => props.type == "project" && "20px 15px"};
    width: ${ props => props.type == "project" && "100%"};

    a {
        color:#5CC0D9;
        cursor: pointer;
        font-size: 14px;
        margin-top: 1rem;
    }
`

const Title = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    p {
        margin: 0;
    }
`

const Tag = styled.div`
    background: rgba(196, 196, 196, 0.44);
    border-radius: 10px;
    padding: 1px 12px;
    margin-right: 0.8rem;
    margin-top: 1rem;

    min-width: 3rem;
    text-align: center;
    font-size: 14px;
    font-size: ${ props => props.type == "project" && "12px"};

    height: 32px;
    height: ${ props => props.type == "project" && "28px"};
    display: grid;
    place-items: center;

    transition: all 0.4s ease;

    &:hover {
        transform: scale(110%, 110%);
    }
`