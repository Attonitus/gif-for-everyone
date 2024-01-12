import { useState } from 'react'
import styled from 'styled-components'

const InputAddCategoryStyled = styled.form`
    position: relative;
    input{
        block-size: 3rem;
        padding-inline: .75rem;
        padding-inline-start: 2.4rem;
        padding-block: .5rem;
        font-size: 1rem;
        font-weight: 600;
        background-color: #252932;
        color: #D1D4D8;
        border-radius: 2rem;
        outline: none;
        border: none;
        
    }
    input::placeholder{
        color: #D1D4D8;
        transition: .3s all ease;

    }
    input:focus::placeholder{
        color: #83AAE9;
        transition: .3s all ease;
    }
    span{
        position: absolute;
        pointer-events: none;
        color: #D1D4D8;
        left: .45rem;
        bottom: .8rem;
        font-size: 1.4rem;
    }
`

function InputAddCategory({addCategories}) {

    const [input, setInput] = useState("")

    const inputChange = (e) => {
        setInput(e.target.value);
    }
    const onSubmit = e => {
        e.preventDefault();
        const inputClean = input.trim();

        if(inputClean.length <=1) return;

        addCategories(inputClean);
        setInput("");
    }
    return (
        <InputAddCategoryStyled onSubmit={onSubmit}>
            <input onChange={inputChange} value={input} type="search" placeholder='Search for funny gifs!!' />
            <span className="material-symbols-outlined">search</span>
        </InputAddCategoryStyled>
    )
}

export default InputAddCategory
