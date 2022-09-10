import { useState, useEffect } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled from 'styled-components';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom';

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
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
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
                drag: "free",
                pagination: false,
                arrows: true,
            }}>
            {popular.map((recipe) => {
                return(
                    <SplideSlide key={recipe.id}>
                    <Card>
                        <Link to={'/recipe/' + recipe.id}>
                        <h5>{recipe.title}</h5>
                        <img src={recipe.image} alt={recipe.title} />
                        <Gradient/>
                        </Link>
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
    margin: 0% 10% 10% 5%;
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
    h5{
        position: absolute;
        color: white;
        z-index: 10;
        transform: translate(-50%, 0%);
        left: 50%;
        bottom: 0%;
        width: 100%;
        text-align: center;
        font-weight: 700;
        font-size: 1rem;
        justify-content: center;
        height: 20%;
    }
`;
const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Popular