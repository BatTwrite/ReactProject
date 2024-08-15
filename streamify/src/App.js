import logo from './logo.svg';
import './App.css';
import FetchData from './components/Fetchdata';
import Movielist from './components/Movielist';
import { useState } from 'react';
//import List from './list';//

function App(props) {
    const [searchterm,setSearchTerm] = useState("")
  return (
    <div className="App">
      <header class="heading">
      <h1 class ="heading-1">Streamify</h1>
      <input class="input" type='text' placeholder='search Movie' onChange={event=>{setSearchTerm(event.target.value)}}></input>
      </header>
     

      <FetchData search ={searchterm}/>
    
    </div>
  );
}

export default App;
