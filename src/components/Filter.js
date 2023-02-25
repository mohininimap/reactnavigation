import React from 'react'
import { useSearchParams } from 'react-router-dom'
const Filter = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    console.log(searchParams.get('age'));
    console.log(searchParams.get('city'));
    const age=searchParams.get('age');
    const city=searchParams.get('city');

  return (
   <>
   <h1>Filter Page</h1>
   <h3>Age is : {age}</h3>
   <h3>City is : {city}</h3>
   </>
  )
}

export default Filter