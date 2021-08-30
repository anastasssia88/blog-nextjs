import React from 'react'
import styled from 'styled-components'
import Tag from "./Card/Tag"

const Card = ({ type, title, date, content, image}) => {

    return (
        <Container>
            <Title>
                <h3>{title}</h3>
                <p>{date}</p>
            </Title>
            <p>{content}</p>
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

    p {
        margin: 0.5rem 0;
    }
`

const Title = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`