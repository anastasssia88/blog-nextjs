import React from 'react'
import styled from 'styled-components'
import Voice from '../../public/images/voice.jpeg'


const Card = ({ type, data }) => {
    let { id, title, date, content, tags, link, status } = data;
    let newContent = content.split("; ")

    return (
        <Container key={id} type={type} >
            <Title type={type} status={status}>
                <h3>{title}</h3>
                <p>{date}</p>
            </Title>
            {
                newContent.length > 1 ? 
                    (newContent.map( item => 
                        <p key={item}>{item}</p>
                    ))
                :
                    (newContent.map( item => 
                        <p key={item}>{item}</p>
                    ))
            }
            <div>
                {
                    tags.map( tag => <Tag type={type} key={tag}>{tag}</Tag>)
                }
            </div>
            {
                type === "project" && 
                <a href={link} target="_blank">Live Demo</a>
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
    padding: 3rem 0rem;

    > div {
        display: flex;
        flex-direction: row;
        @media (max-width: 768px) {
          flex-wrap: wrap;
        }
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
    margin: ${ props => props.type == "project" && "3rem 0 0 0"};
    width: ${ props => props.type == "project" && "100%"};
    

    @media (max-width: 768px) {
        width: 100%;
        margin: ${ props => props.type == "project" && "2rem 0 0 0"};
    }

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
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column!important;
    }

    p {
        margin: 0;
        @media (max-width: 768px) {
            align-self: flex-start;
            color: rgba(159, 164, 167, 0.49);
        }
    }

    h3 {
        @media (max-width: 768px) {
            align-self: flex-start;
        }
    }

    &::before {
        content: ' ';
        display: inline-block;
        width: 23px;
        height: 23px;
        position: absolute;
        left: -4.1rem;
        -moz-border-radius: 20px;
        -webkit-border-radius: 20px;
        border-radius: 20px;
        background-color: #69b6d5;
        border: 4px solid #69b6d5;

        /* change style for current position */
        background-color: ${ props => props.status == "current" && "#EDEBE8"};

        /* do not display if card for project */
        display: ${ props => props.type == "project" && "none"};

        @media (max-width: 768px) {
            left: -2.7rem;
        }
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