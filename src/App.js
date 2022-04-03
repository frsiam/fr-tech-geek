import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Videos from './Components/Videos/Videos';
import Login from './Components/Login/Login'
import NotFound from './Components/NotFound/NotFound';
import BlogDetails from './Components/BlogDetails/BlogDetails';

export const BlogContext = createContext()
function App() {
  const [blogs, setBlogs] = useState([])
  return (
    <>
      <BlogContext.Provider value={[blogs, setBlogs]}>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/videos' element={<Videos></Videos>} />
          <Route path='/login' element={<Login />} />
          <Route path='/blog/:id' element={<BlogDetails></BlogDetails>}></Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BlogContext.Provider>
    </>
  );
}

export default App;
