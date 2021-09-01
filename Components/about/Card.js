import React from 'react'
import styled from 'styled-components'
import Voice from '../../public/images/voice.jpeg'


const Card = ({ type, data }) => {
    let { id, title, date, content, tags, image } = data;
    let newContent = content.split("; ")

    return (
        <Container key={id}>
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
                    tags.map( tag => <Tag key={tag}>{tag}</Tag>)
                }
            </div>
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

    /* > p {
        margin: 1rem 0;
    } */

    > div {
        display: flex;
        flex-direction: row;
    }

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
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
    height: 32px;
    display: grid;
    place-items: center;
`