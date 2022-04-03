import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Videos from './Components/Videos/Videos';
import Login from './Components/Login/Login'
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos></Videos>} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
