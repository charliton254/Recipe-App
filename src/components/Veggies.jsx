import { useState, useEffect } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled from 'styled-components';
import '@splidejs/react-splide/css'
import '../App.css'

function Veggies() {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie()
    },[])

    const getVeggie = async() => {

        const check = localStorage.getItem("veggie");

        if (check) {
            setVeggie(JSON.parse(check));
        } else {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=7&tags=vegetarian`);
        const data = await api.json();
        localStorage.setItem("veggie", JSON.stringify(data.recipes));
        setVeggie(data.recipes);
        }
    }
  return (
    <div>
        <Wrapper>
            <h3 className="picks-title" >Vegetarian Picks</h3>
            <Splide
            options={{
                perPage: 3,
                gap: '5rem',
                drag: 'free',
                pagination: false,
                arrows: false,
            }}>
            {veggie.map((recipe) => {
                return(
                    <SplideSlide key={recipe.id}>
                    <Card>
                        <h5>{recipe.title}</h5>
                        <img src={recipe.image} alt={recipe.title} />
                    </Card>
                    </SplideSlide>
                )
            })}
            </Splide>
        </Wrapper>
    </div>
  )
}
const Wrapper = styled.div`
    margin-bottom: 7rem;
    background-color: light-pink;
`;

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    
    img {
        border-radius: 2rem;
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;


export default Veggies