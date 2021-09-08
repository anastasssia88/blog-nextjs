import React, { useState } from 'react'
import styled from 'styled-components'


const Form = () => {
    return (
        <FormWrapper action="">
            <input type="text" id="name" name="name" aria-label="name" placeholder="Name*"/>
            <input type="text" id="email" name="email" aria-label="email" placeholder="Email*"/>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="What's on your mind?"/>
            {/* <input type="textarea" id="message" name="message" aria-label="message" placeholder="What's on your mind?" cols="50"/> */}
            <Button href="/contact">Send</Button>
        </FormWrapper>
    );
}

export default Form;

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-self: flex-start;
    align-self: center;
    margin: 1rem 0;

    input, textarea{
        background: rgba(237, 235, 232, 0.6);
        border: none;
        margin: 8px 0px;
        padding: 10px 20px;
        border-radius: 20px;
        width: 20rem;
    }

    textarea {
        height: 10rem;
    }

    input::placeholder, 
    input::-webkit-input-placeholder,
    textarea::placeholder,
    textarea::-webkit-input-placeholder {
        color: rgba(17, 60, 71, 0.65);
        font-size: 14px;
    }
`

const Button = styled.button`
    background: #BE4357;
    color: #EDEBE8;
    font-weight: 400;
    border-radius: 50px;
    border: none;
    margin: 8px 0px;
    padding: 10px 20px;
    width: 10rem;
    cursor: pointer;
    font-size: 14px;

    transition: all 0.3s ease-in-out;

    &:hover {
        color: #314654;
        background: rgba(237, 235, 232, 0.6);
        /* transform: scale(1.1, 1.1) */
    }
`