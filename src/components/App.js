
import React from "react";
import './../styles/App.css';
import { Route, Routes } from "react-router-dom";
import Items from "./Items"
import List from './List';

const App = () => {
  return (
    <div>
      <h1>Item List</h1>
      <Routes>
        <Route path="" element={<List/>}/>
        <Route path="/items/:id" element={<Items/>}/>
      </Routes>
    </div>
  )
}

export default App
