import styled from 'styled-components'
import PropTypes from 'prop-types'
import GifItem from './gifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



const GifGridStyled = styled.div`
    flex: 1 1 0;
    max-inline-size: 25rem;
    background-color: #2b2c30;
    border-radius: 1rem;
    &:hover{
        box-shadow: rgba(149, 157, 165, 0.216) 0px 8px 24px;
    }
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: 1rem;
    }
    button{
        inline-size: 3rem;
        block-size: 3rem;
        border-radius: 50%;
        background-color: #202124;
        color: #878787;
        border: none;
    }
    button:hover{
        background-color: #464749;
        cursor: pointer;
        color: #E7E9EC;
    }
    span{
        display: block;
    }
`

function GifGrid({category, substractCategory}) {

    const {gifs, isLoading} = useFetchGifs(category);

    const onRemoveCategory = () => {
        substractCategory(category);
    }

    return (
        <GifGridStyled className='box'>
            <div className="title">
                <h3>{category}</h3>
                <button onClick={onRemoveCategory}>
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>
            {
                isLoading ? (<h3>Loading...</h3>) : null
            }
            {
                gifs.length === 0 ? <h3>No se encontraron gifs :c</h3> :
                gifs.map( gif => (
                    <GifItem key={gif.id} title={gif.title} url={gif.url} />
                ))
            }
        </GifGridStyled>
    )
}

export default GifGrid


GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}