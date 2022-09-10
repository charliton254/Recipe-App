import '../App.css';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);

  }
  return (
    <div className='form-div'>
    <form className="form" onSubmit={submitHandler} >
        <FaSearch className='svg'/>
        <input type="text" className='input' value={input} 
        onChange={(e) => setInput(e.target.value)} />
    </form>
    </div>
  )
}

export default Search