import React from 'react'
import styled from 'styled-components'
// import Tag from "./Card/Tag"
import Voice from '../../public/images/voice.jpeg'


const Card = ({ type, data, title, date, content, image}) => {

    return (
        <>
        {
            data.map( item =>
                <Container key={item.id}>
                    <Title>
                        <h3>{item.title}</h3>
                        <p>{item.date}</p>
                    </Title>
                    <p>{item.content}</p>
                    {/* <img src={Voice} alt="siri voice biulding engineer" width="100%" height="50%" /> */}
                    <div>
                        {
                            item.tags.map( tag => <Tag key={tag}>{tag}</Tag>)
                        }
                    </div>
                </Container>
            )
        }
        
        </>
    )
}

export default Card
  
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 80%;

    p {
        margin: 1rem 0;
    }

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
`

const Tag = styled.div`
    background: rgba(196, 196, 196, 0.44);
    border-radius: 10px;
    padding: 1px 12px;
    margin-right: 0.8rem;

    min-width: 3rem;
    text-align: center;
    font-size: 14px;
    height: 32px;
    display: grid;
    place-items: center;
`