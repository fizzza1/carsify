import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home/Home'
import AddCar from "./Pages/AddCar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addcar" element={<AddCar />} />
      </Routes>
    </Router>
  )
}

export default App;
