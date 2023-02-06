import React, {useState} from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  
  const [city,setCity] = useState("")
  
  return (
    <div>
     <Router>
     <Header setCity = {setCity}/>
     <Routes>
       <Route path = "/" element = {<Home city = {city}/>}/>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
