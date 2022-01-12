import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import axios from 'axios'

function Child(){

    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => setData(res.data))
    }, [])

    console.log(data)

    return (
        <div className='Child'>
            <h1>Child</h1>
            <Link to="/">
                <button>Parent</button>
            </Link>
            {
                    data.map((dat, idx) =>(
                        <li key={idx}>{dat.id} -- {dat.title}</li>
                    ))
            }
        </div>
    )
}

export default Child 