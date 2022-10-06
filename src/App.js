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
  const [show, setShow] = useState (true)

  const handleOnAdd = () => console.log ("agregar al carrito")

  return (
    <div className="App">
      
      {/*<button onClick={() => setShow(!show)}>Show/Hide</button>

      <header className="App-header">
{React.createElement(AvatarJsx, {name: 'Jose', id:'2'})}
  <AvatarJsx name= 'Seba' id= '1'/>
  <Button label={"Cancelar"} background="red" action= {() => console.log ("Acepte")}/>
  <Button label={"Aceptar"} background="green" action= {() => console.log ("Cancele")}/>
  
  </header>*/}
<BrowserRouter>
<Navbar/>
<Counter>
    <Title title="Producto"/>
</Counter>
<Routes>
  <Route path="/" element={<ItemListContainer greetings={"Nuestros productos"}/>}/>
  <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
</Routes>
</BrowserRouter>  

  {/*<Counter>
    <Title title="contar manzanas"/>
</Counter>
<counter initial={0} stoc= {10} onAdd={handleOnAdd}/>
{show ? <Effect /> : null}*/}

  

    </div>
  );
}

export default App;
