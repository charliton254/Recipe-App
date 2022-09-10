import React from 'react'
import Veggies from '../components/Veggies'
import Popular from '../components/Popular'
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration:0.6}}
      >      
        <Veggies/>
        <Popular/>
    </motion.div>
  )
}

export default Home