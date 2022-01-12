import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"
import Child from './Child';
import Home from './Home';

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="child" element={<Child />} />
        </Routes>
        <Link to="/child">
          <button>Child</button>
        </Link>
      </Router>
      </div>
  );
}

export default App;
