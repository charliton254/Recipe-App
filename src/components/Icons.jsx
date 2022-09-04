import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiChickenOven, GiCupcake } from 'react-icons/gi'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';

function Icons() {
  return (
    <Iconic>
        <Link to="/Cuisine/African" style={{ textDecoration:'none' }} className='icons' >
            <GiChickenOven/>
            <h4>African</h4>
        </Link>
        <Link to="/Cuisine/American" style={{ textDecoration:'none' }} className='icons' >
            <FaHamburger/>
            <h4>American</h4>
        </Link> 
        <Link to="/Cuisine/Italian" style={{ textDecoration:'none' }} className='icons' >
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </Link >       
        <Link to="/Cuisine/Chinese" style={{ textDecoration:'none' }} className='icons' >
            <GiCupcake/>
            <h4>Chinese</h4>
        </Link>
    </Iconic>
  )
}

const Iconic = styled.div`
    justify-content: center;
    display: flex;
`

export default Icons