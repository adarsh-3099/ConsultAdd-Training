import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const curr = {
  "USD": 0.014,
  "AUD": 0.019,
  "YEN": 1.56,
  "YUAN": 0.086
}

function App() {

  const [data, setData] = useState(0)
  const [country, setCountry] = useState("AUD")
  const [res, setRes] = useState()

  
  console.log(country)
  
  // const convert = () =>{
  //   setRes(curr[country]*data)
  // }

  return (
    <div className="App">
      <h1>App</h1>
      INR:
      <input type={"number"} value={data} onChange={(e) => setData(e.target.value)}/>
      <label for="cars">Choose a Currency:</label>
        <select value={country} onChange={(e) => setCountry(e.target.value)} name="cars" id="cars">
          <option value="USD">USD</option>
          <option value="AUD">AUD</option>
          <option value="YEN">YEN</option>
          <option value="YUAN">YUAN</option>
        </select>
      {/* <button onClick={convert()}>Convert</button> */}
      <h3>{country}{" "}{curr[country]*data}</h3>
    </div>
  );
}

export default App;
