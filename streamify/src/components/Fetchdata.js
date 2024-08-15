import axios from "axios";
import { useEffect, useState } from "react";
import "./Fetchdata.css"
import Movielist from "./Movielist";
import Loading from "./Loading";

function FetchData(props){
const [record,setRecords] = useState([]);
const [loading,SetLoading] = useState(false);
useEffect(()=>{
    axios.get('https://jsonfakery.com/movies/random/200').then((res)=>{
        setRecords(res.data)
        // console.log(res.data)
        SetLoading(true)
    }).catch((err)=> console.log(err))
},[])
return (<>
    <main class = "main1">
   {loading ? record.filter((val)=>{
    if(props.search === ""){
        return val 
    }else {
     return val.original_title.toLowerCase().includes(props.search.toLowerCase().trim(" "));

    }
    
   }).map((move,index)=>{
    return (<div class="main">
       <Movielist key={move.id}movie ={move}/>
    </div>
    )
   }):<Loading/>}
</main>
</>)
}
export default FetchData;