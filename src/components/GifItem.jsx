import styled from 'styled-components'
import PropTypes from 'prop-types';

const GifItemStyled = styled.div`
    padding: 1rem;
    img{
        inline-size: 100%;
        block-size: 15rem;
        object-fit: cover;
        border-radius: .75rem;
    }
    h4{
        color: #83AAE9;
        font-size: 1.2rem;
    }
`

function GifItem({title, url}) {
    return (
        <GifItemStyled>
            <img src={url} alt={title} />
            <h4>{(title.length > 0 ? title : "Sin titulo")}</h4>
        </GifItemStyled>
    )
}

export default GifItem;


GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

GifItem.defaultProps = {
    title: "Oops, error 404",
    url: "https://t3.ftcdn.net/jpg/02/61/08/76/360_F_261087622_8eRI0TAwDAyabS1b0Uifx1wKqHzA41r3.jpg"
}

