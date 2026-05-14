import Typewriter from 'typewriter-effect';
import React from 'react'

export default function Name() {
  return (

      
    <h1 className="text-3xl font-bold" style={{fontSize:"1.8rem"}}>
      <Typewriter
        options={{
          strings: ["Love Maggo","A Full Stack Developer","Flutter Developer"],
          autoStart: true,
          loop: true,
          delay: 75,
        }}
      />
    </h1>
  
  )
}
