import React, { useState } from 'react' 
import './App.css';
import AvatarJsx from './components/Avatar/AvatarJsx'
import Button from './components/Button/Button';
import Counter from './components/Counter/Counter';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Title from "./components/Title/Title";
import Effect from './components/Effect/Effect';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
  
<BrowserRouter>
<Navbar/>
{/*<Counter>
    <Title title="Producto"/>
  </Counter>*/}
<Routes>
  <Route path="/" element={<ItemListContainer greeting={"Nuestros productos"}/>}/>
  <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
</Routes>
</BrowserRouter>  

{/*<Counter>
    <Title title="contar manzanas"/>
</Counter>*/}

    </div>
  );
}

export default App;
