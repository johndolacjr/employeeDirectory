// import logo from './logo.svg';
// import './App.css';
//Super common - always destructure hooks you are going to use (easiest way)
// import { useState, useEffect } from "react";
// import API from "./API.js"

import React from "react";
import EmployeeContainer from "./Components/EmployeeContainer/EmployeeContainer";

function App() {
   // delete everything in the return; write my code to call other components 
  return (
    <>
    <EmployeeContainer/>
    </>
  );
}

export default App;

  // const [data, setData] = useState({
  //   search: "",
  //   people: [],
  // });
  // console.log (data);

  // useEffect (() => {
  //   API.key().then(response => setData(response.data))
  // }, []);
  
 

// Components 
  // List of people
  // search bar 
// file for API calls - see activity 

// value = what the user puts in 
// name is used in the string in the searchform function 

// App.js dont use a lot of coade 


