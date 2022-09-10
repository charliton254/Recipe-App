import styled from "styled-components";
import {FaHamburger} from 'react-icons/fa'
import { AiTwotoneHome } from 'react-icons/ai'
import { Link } from "react-router-dom";
import '../App.css'

function Nav() {
  return (
    <Navbar>
        <Navdiv>
            <FaHamburger/> 
            <h4>Charlie's Recipes</h4>
        </Navdiv>
        <Link to={'/'} style={{textDecoration: 'none'}} className="homelink">
        <Back>
            <AiTwotoneHome size={20}/>
            <h5 >Homepage</h5>
        </Back>
        </Link>

    </Navbar>
  )
}

const Navbar = styled.div`
    height: 11rem;
    width: 100%;
    background-color: #494949;
    margin-bottom: 2%;
`
const Navdiv = styled.div`
    display: flex;
    align-items: center;
    padding-left: 2%;
    height: 6rem;

    svg{
        height: 3rem;
        width: 3rem;
        padding-right: 0.5%;
        color: white;
    }
    h4{
        font-family: cursive;
        font-style: italic;
        font-weight: 900;
        font-size: 1.5rem;
        color: white;
    }
`;
const Back = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 4%;
    height: 5rem;

    svg{
        color: white;
        margin-right: 0.3%;
        &:hover{
            transform: scale(1.05);
            transition: all 0.2s ease-out;
        }
    }

    h5{
        color: white;
        font-size: 1.2rem;
        &:hover{
            transform: scale(1.04);
            transition: all 0.2s ease-out;
        }
    }
`


export default Nav