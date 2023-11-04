import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const URL = "https://6545abc8fe036a2fa954a995.mockapi.io/coolUsers";
  const [name, setName ] = useState("");
  const [users, setUsers ] = useState([]);

  //POST..basically pushing data to an array
  const postData = ()=>{
    axios.post(URL,{
      name:name,
      age:20,
      hobbies:["Coding", "Football", "Video games"],
    })
    .then((res)=>{
      getData();
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  //PUT - basically updating the api
  const updatedata = (id) => {
    axios
      .put(`https://6545abc8fe036a2fa954a995.mockapi.io/coolUsers/${id}`, {
        name: "King Rio",
        age: 20,
        hobbies: ["Coding", "Football", "Video games", "anime"],
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //DELETE - deleting the api
  const deleteData = (id) => {
    axios
      .delete(`https://6545abc8fe036a2fa954a995.mockapi.io/coolUsers/${id}`)
      .then((res) => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  }

    //GET-basically getting data from the api
   const getData = ()=>{
     axios
      .get(URL)
      .then((res)=>{
        setUsers(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
   }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
        <input 
        type="text" 
        placeholder="put name"
        onChange={(event)=>setName(event.target.value)} />
       <button onClick={postData}>Click me</button>

       {users.map((user,index)=>{
        return(
          <div key={index}>
            <h1>{`${user.id}. ${user.name}`}</h1>
            <button onClick={()=>updatedata(user.id)}>Update</button>
            <button onClick={()=>deleteData(user.id)}>Delete Data</button>
          </div>
        )
       })}
    </div>
  );
}

export default App;
