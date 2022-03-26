import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Factorials from "./factorial";
import Home from "./home";

function App() {

  return (
    <div className="App">
     
      <Router>
        <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="/factorial" element={<Factorials />}>

          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
