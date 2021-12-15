import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Currency from "./Routes/Currency";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/CoinPage/:id" exact element={<Currency />} />
      </Routes>
      </Router>
    </div>

  );
}

export default App;
