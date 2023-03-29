import React , {useState}  from 'react';
import Axios from "axios";
import WeatherR from './WeatherR';
import 'bootstrap/dist/css/bootstrap.min.css';

function Weather() { 
    const [name, setName] = useState("");
    const [city, setHeading] = useState("");
   const [flag,setFlag]= useState(0);
    function handleChange(event) {
      
      setName(event.target.value);
      setFlag(0);
    }
 
async function handleClick (event) {
    try{event.preventDefault();
      setHeading(name);

      try{const resp= await Axios.post("http://localhost:5000/createData", {name})
      console.log("resp",resp.data);}
      catch(err){
        console.log(err);
      }
      setFlag(1);
    }
    catch(err){
        console.log(err)
    }
   
    }
return (       
        <div className='main'>        
            <p className="title"><h1>Weather</h1></p>
            <div className="container">      
             <h4 className="subtitle">checking weather by place</h4>
            <div className="container">
 <div className="mb-3">
      <form onSubmit={handleClick}  >
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's city?"
          value={name}
        />
        <button type="submit" className="btn btn-primary" >Submit</button>
        
      </form></div>
    </div>
        <div className="column">            
        {flag? <WeatherR/>: null   }   </div></div>
    </div>
    );
  }
  
  export default Weather;