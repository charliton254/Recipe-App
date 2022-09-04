import { useState, useEffect } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled from 'styled-components';
import '@splidejs/react-splide/css';

function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular()
    },[])

    const getPopular = async() => {

        const check = localStorage.getItem("popular");

        if (check) {
            setPopular(JSON.parse(check));
        } else {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5`);
        const data = await api.json();
        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopular(data.recipes);
        }
    }

  return (
    <div>
        <Wrapper>
            <h3 className="picks-title">Popular Picks</h3>
            <Splide
            options={{
                perPage: 4,
                gap: '5rem',
                drag: 'free',
                pagination: false,
                arrows: false,
            }}>
            {popular.map((recipe) => {
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
    margin: 4rem 0 rem;
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

export default Popular