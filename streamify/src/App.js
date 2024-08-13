import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//import List from './list';//

function App() {
  const [data,  Setdata]= useState([])
 fetch("https://jsonfakery.com/movies/paginated").then((res)=> res.json()).then((data)=>{
  Setdata(data);
  })
  return (
    <div className="App">

      {data.map((record,index)=>{
        return <p>{record.original_title}</p>
      })}
      
    </div>
  );
}

export default App;
