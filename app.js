import "./styles.css";
import React ,{useState} from 'react';
import JSONDATA from "./mock_data.json";
 function App() {
 const [searchTerms,setSearchTerms]=useState('');

 return (
    <div className="App">
    <input type='text' placeholder='Search...' onChange={event=>{setSearchTerms(event.target.value)}} />
     
    {JSONDATA.filter(value => {
      if(searchTerms=== ''){
        return value
      }else{
        if(value.title.toLowerCase().includes(searchTerms.toLowerCase())){
         return value
        }
      }
    })
    .map(val=>
      {
     return(
       <div><p>{val.title}</p></div>
     )}
      )}
      </div>   
 );
}

export default App;