import React from 'react'
import Veggies from '../components/Veggies'
import Popular from '../components/Popular'
import Icons from '../components/Icons';

function Home() {
  return (
    <div>  
        <Icons/>     
        <Veggies/>
        <Popular/>
    </div>
  )
}

export default Home