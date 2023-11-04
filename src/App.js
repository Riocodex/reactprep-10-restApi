import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  //Get - get data from data base
  //POST- read from data
  //put or patch - update data
  //delete - delete data
  const URL = "https://6545abc8fe036a2fa954a995.mockapi.io/users`";

  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const postData = () =>{
    axios
    //posting
    .post(URL,{
      name:name,
      age:20,
      hobbies:["Anime", "Cooking", "Football", "Coding", "Video Games"],
    })
    //getting data
    .then((res) =>{
      console.log(res);
    })
    .then((err) =>{
      console.log(err);
    })
  }

  useEffect(()=>{
    axios.get(URL)
    .then((res)=>{
      setUsers(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  })
  return (
    <div className="App">
        <h1>Rest API</h1>
        <input type="text"
         placeholder="input data"
         onChange={(event)=>setName(event.target.value)} />
        <button onClick={postData}>Post data</button>

        {/* {homes.map(home => <div>{home.name}</div>)} */}
    </div>
  );
}

export default App;
