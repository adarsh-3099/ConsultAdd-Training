import React from 'react';
import { useState, useEffect } from 'react'

function User() {

    useEffect(async () =>{
        const getData = await fetch('data.json')
        console.log(getData)
        const r = await getData.json()
        console.log(r)
        setData(r)
    }, [])

    const [chk, setChk] = useState(false)
    const [chkAge, setChkAge] = useState(false)
    const [data, setData] = useState([]);
    
    const handleName = (e) =>{

       e.preventDefault()
       setChk(true)
       data.sort((a,b)=>{
           return a.name>b.name?1:-1;
       })
       setData([...data]);
       setChkAge(false)
    }
    const handleAge = (e) =>{
        e.preventDefault();
        setChkAge(true)
        data.sort((a,b)=>{
            return a.age>b.age?1:-1;
        });
        setData([...data]);
        setChk(false)
    }
    
    
    return (
        <>

            <input onChange={(e)=>handleName(e)} type="radio" id="name" name="person" checked={chk} value={chk} />
            <label for="name">name</label><br/>
           
            <input onChange={(e)=>handleAge(e)} type="radio" id="age" name="age" checked={chkAge} value={chkAge} />
            <label for="age">age</label><br/>
            
            
            
            { data.map((user, idx)=>{
                
                return (
                    <div key={idx}>
                        <h2>{user.id}-{user.name} {user.age}</h2>
                    </div>
                )
            })}
        </>
    )
}

export default User