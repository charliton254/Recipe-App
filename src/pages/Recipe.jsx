import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
    const [details, setDetails] = useState({});
    let params = useParams();
    const [ activeTab, setActiveTab ] = useState('instructions');

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
    }

    useEffect(() => {
        fetchDetails();
    }, [params.name]);
    
  return (
    <DetailCard>
        <div>
        <h3>{details.title}</h3>
        <img src={details.image} alt={details.title} />
        </div>
        <Info>
            <Button onClick={() => setActiveTab('instructions') } 
            className={activeTab === 'instructions'? "active" : ""} >Instructions</Button>
            <Button onClick={() => setActiveTab('ingredients') } 
            className={activeTab === 'ingredients'? "active" : ""} >Ingredients</Button>
        { activeTab === 'instructions' && (
            <div>
                <h4 dangerouslySetInnerHTML={{__html: details.summary}} ></h4>
                <h4 dangerouslySetInnerHTML={{__html: details.instructions}} ></h4>
            </div>
        )}  
        { activeTab === 'ingredients' && (
            <ul>
                {details.extendedIngredients.map((ingredient) => ( 
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
        )}  
        </Info>
    </DetailCard>
  )
}

const DetailCard = styled.div`
    display: flex;
    margin: 5% 10% 10% 5%;

    h3{
        margin-bottom: 2rem;
    }
    .active{
        background: linear-gradient(35deg, #494949, #313131 );
        color: white;
    }
`;
const Button = styled.button`
    color: #313131;
    background: white;
    font-weight: 600;
    margin-right: 2rem;
    padding: 1rem 2rem;
    border: 2px solid black;
`
const Info = styled.div`
    margin-left: 7rem;

    h4{
        pointer-events: none;
        font-family: cursive;
        font-weight: 550;
    }
`

export default Recipe