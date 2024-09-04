import React,{useState} from 'react'
import { ButtonGroup } from 'react-bootstrap'
import Button  from 'react-bootstrap/esm/Button'
const User = () => {
    const[user,setUser]=useState({
        name:"amna shoaib",
        age:"19",
        phone:"6462874785",
})
    const{isMarried,setIsMarried}=useState(false);
    const{name,age,phone}=user;
    const updateIsMarried=()=>{

    }
  return (
    <div>
      
        <Button class name ="btn btn-primary" onClick={updateIsMarried}>Update Marrige Status</Button>
           setIsMarried(!isMarried)
           {
        isMarried?(
            <>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{phone}</h1>
            </>
        ):
        null
    }
    </div>
  )
}

export default User
