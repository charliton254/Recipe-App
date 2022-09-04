import React, { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom';
import styled from "styled-components";

function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    const params = useParams();

    const getCuisine = async(name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
        console.log(recipes.results);

    }

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type]);

  return (
    <Grid>
        {cuisine.map((item) => {
            return(
                <Card key={item.id}>
                    <img src={item.image} alt={item.title} /> 
                    <h4>{ item.title }</h4>
                </Card>
            );
        })}
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
    margin-top: 3rem;
`
const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        margin-top: 0;
    }
`;

export default Cuisine