import Home from "./pages/Home"
import Work from "./pages/Work"
import { Route, Routes } from "react-router-dom";
import React from 'react';

function App() {

  return (<>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/work" element={<Work/>}/>


  </Routes>
  
   </>
  
  )
}

export default App
