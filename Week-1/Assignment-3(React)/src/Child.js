import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import axios from 'axios'

const bdays = [
    {
      "name": "Adarsh",
      "bday": "30-11-1999"
    },
    {
      "name": "Isha",
      "bday": "30-09-1999"
    },
    {
      "name": "Darshan",
      "bday": "30-07-1999"
    },
    {
      "name": "Rajendra",
      "bday": "30-12-1999"
    }
]

function Child(){

    const [data, setData] = useState([])

    function nameSort()
    {
        return data.sort(function(a, b)
        {
            var x = a["name"]; var y = b["name"];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

    const peop = nameSort()
    console.log(peop)

        const getData=()=>{
                fetch('./data.json')
                  .then(function(response){
                    console.log(JSON.parse(response.json()))
                    return response.text();
                  })
                  .then(function(myJson) {
                    console.log(myJson);
                  });
              }
        useEffect(()=>{
            getData()
        },[])

    // console.log(data)

    return (
        <div className='Child'>
            <h1>Child</h1>
            <Link to="/">
                <button>Parent</button>
            </Link>
            <hr />
            Sort By Birthday<button type={"radio"} onClick={nameSort()}/>
            {
                    bdays.map((dat, idx) =>(
                        <li key={idx}>{dat.name} -- {dat.bday}</li>
                    ))
            }
        </div>
    )
}

export default Child 