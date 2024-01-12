import { useState } from 'react'
import styled from 'styled-components'
import InputAddCategory from './components/InputAddCategory';
import GifGrid from './components/GifGrid';

const GifExpertAppStyled = styled.div`
    .grid{
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: repeat(auto-fill, minmax(25rem, 25rem));
        grid-gap: 1.5rem;
        padding-block: 1rem;
    }
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

function GifExpertApp() {
    const [categories, setCategories] = useState(['Breaking bad', 'Cats', 'Piano']);
    
    const addCategories = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    const substractCategory = (id) => {
        setCategories(categories => {
            return categories.filter( category => category !== id)
        })
    }

    return (
        <GifExpertAppStyled>
            <div className="center">
                <h1>Gifs for everyone!</h1>

                <InputAddCategory addCategories={addCategories} />
            </div>

            <div className="grid">
                {
                    categories.length === 0 ? <h2>Waiting for something to happen?</h2> :
                    categories.map( category => (
                        <GifGrid key={category} 
                        substractCategory={substractCategory}  
                        category={category} />
                    ))
                }
            </div>
        </GifExpertAppStyled>
    )
}

export default GifExpertApp
