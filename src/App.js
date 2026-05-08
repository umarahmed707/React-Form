

import './App.css';
// import Api from '../src/component/Api'
import { Recipesapi } from './component/Recipesapi';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// // import { useEffect, useState } from 'react';

function App() {

  // const [students,Setstudents]=useState(false)
  // const [students1,Setstudents1]=useState(false)
  // const [students2,Setstudents2]=useState(false)
  // const [students3,Setstudents3]=useState(false)
  // const [students4,Setstudents4]=useState(false)
  // const [students5,Setstudents5]=useState(false)
  // const [students6,Setstudents6]=useState(false)
  // const [students7,Setstudents7]=useState(false)
  // const [students8,Setstudents8]=useState(false)
  // const [students9,Setstudents9]=useState(false)

//   useEffect(()=>{
// console.log("run Useeffect")
//   },[students,students9])
  return (
    <div className='container'>
    {/* <Card id="1" name="Umar ahmed" Description="lorem11hiuhuhnacoNidaubnsiufbecsaj"/>
    <Card id="1" name="Umar ahmed" Description="lorem11hiuhuhnacoNidaubnsiufbecsaj"/>
    <Card id="1" name="Umar ahmed" Description="lorem11hiuhuhnacoNidaubnsiufbecsaj"/>
    <Card id="1" name="Umar ahmed" Description="lorem11hiuhuhnacoNidaubnsiufbecsaj"/>
    <Card id="1" name="Umar ahmed" Description="lorem11hiuhuhnacoNidaubnsiufbecsaj"/>
    <Card id="1" name="Umar ahmed" Description="lorem11hiuhuhnacoNidaubnsiufbecsaj"/>
    <Card id="1" name="Umar ahmed" Description="lorem11hiuhuhnacoNidaubnsiufbecsaj"/>
    <Card id="1" name="Umar ahmed" Description="lorem11hiuhuhnacoNidaubnsiufbecsaj"/>
    <Card id="1" name="Umar ahmed" Description="lorem11hiuhuhnacoNidaubnsiufbecsaj"/> */}
      {/* <button onClick={()=>(Setstudents(!students))}>Click here</button>
      <button onClick={()=>(Setstudents1(!students1))}>Click here</button>
      <button onClick={()=>(Setstudents2(!students2))}>Click here</button>
      <button onClick={()=>(Setstudents3(!students3))}>Click here</button>
      <button onClick={()=>(Setstudents4(!students4))}>Click here</button>
      <button onClick={()=>(Setstudents5(!students5))}>Click here</button>
      <button onClick={()=>(Setstudents6(!students6))}>Click here</button>
      <button onClick={()=>(Setstudents7(!students7))}>Click here</button>
      <button onClick={()=>(Setstudents8(!students8))}>Click here</button>
      <button onClick={()=>(Setstudents9(!students9))}>Click here</button> */}
    {/* <Card/> */}
 <Recipesapi/>
    </div>
  );
}

export default App;
