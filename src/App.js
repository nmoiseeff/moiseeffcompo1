import React from 'react' 
import './App.css';
import AvatarJsx from './components/Avatar/AvatarJsx'
import Button from './components/Button/Button';
import Counter from './components/Counter/Counter';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div id="1" className="App">
      {/*<header className="App-header">
{React.createElement(AvatarJsx, {name: 'Jose', id:'2'})}
  <AvatarJsx name= 'Seba' id= '1'/>
  <Button label={"Cancelar"} background="red" action= {() => console.log ("Acepte")}/>
  <Button label={"Aceptar"} background="green" action= {() => console.log ("Cancele")}/>
  
  </header>*/}
<Navbar/>
<ItemListContainer greetings={"Bienvenidos"}/>
  <Counter/>

  
    </div>
  );
}

export default App;
