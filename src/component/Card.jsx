import React, { useState } from 'react'

const Card = (props) => {
  const [Todo, setTodo] = useState("")
  const [time, settime] = useState("")
  const [Todolist, setTodolist] = useState([])

  return (
    <div className='container2'>
      <form action="" onSubmit={(e, i) => {
        e.preventDefault()

        let obj = {
          Todo: Todo,
          time: time
        }
        console.log(Todo, time)
        setTodolist([...Todolist, obj])
        setTodo("")
        settime("")
      }} className='form-container'>
        <h1>Form-App</h1>
        <label htmlFor="">Full Name <br />
          <input type="text" value={Todo} placeholder='Enter your Full name' onChange={(e) => { setTodo(e.target.value) }} />
        </label>
        <br />

        <label htmlFor="">Time <br />
          <input type="time" value={time} onChange={(e) => { settime(e.target.value) }} />
        </label>
        <button  className='btn'>Submit</button>
      </form>

      {Todolist.map((eachtodo, i) => {
        return (
          <div style={{display:"flex" , flexDirection:"column"}}>
          <div key={i} style={{display:"flex" , justifyContent:"center",
            alignItems:"center", gap:"70px", border:"1px solid black", padding:"10px 20px", borderRadius:"15px"
          }}>

            <h1>{eachtodo.Todo}</h1>
            <p>{eachtodo.time}</p>

          </div>
          </div>
        )
      })}
    </div>
  

  )
}

export default Card
