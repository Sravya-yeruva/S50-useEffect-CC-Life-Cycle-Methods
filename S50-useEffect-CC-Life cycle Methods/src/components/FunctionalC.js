import React, { useEffect, useState } from 'react'

function FunctionalC() {
    let [Score,setScore]=useState(0);
    let[Wickets,setWickets]=useState(0);

    useEffect(()=>{
        console.log("FunctionalC-OnComponentLoad");
    },[])

    useEffect(()=>{
        return ()=>{
            console.log("FunctionalC-OnComponentUnload");
        }
    },[])
    useEffect(()=>{
        console.log("FunctionalC-Score StateVariable Changed");
    },[Score])
    useEffect(()=>{
        console.log("FunctionalC-Wickets StateVariable Changed");
    },[Wickets])
    useEffect(()=>{
        console.log("FunctionalC-both Score/Wickets StateVariable Changed ");
    },[Score,Wickets])
    useEffect(()=>{
        console.log("FunctionalC anyone Changed");
    })
    

  return (
    <div className='container'>
      <h1 className='mainH'>Functional Component</h1>
      <h1>Score:{Score}</h1>
      <h1>Wickets:{Wickets}</h1>
      <button onClick={()=>{
        setScore(Score+1);
      }}
      >Increment Score</button>

      <button onClick={()=>{
        setScore(Score-1);
      }}
      >Decrement Score</button>
      <br></br>
      <button onClick={()=>{
        setWickets(Wickets+1);

      }}
      >Increment Wicket</button>
      <button onClick={()=>{
        setWickets(Wickets-1);

      }} 
      >Decrement Wicket</button>

    </div>
  )
}

export default FunctionalC
