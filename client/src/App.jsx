import React, { useEffect, useState } from 'react'
import axios from "axios"
import TodoCard from './Components/TodoCard'
import AddTaskBtn from './Components/AddTaskBtn'
import Nav from './Components/Nav'

function App() {
  const [todoData, setTodoData] = useState([])
  const getData = async () => {
    const { data } = await axios.get("http://localhost:1122/get-tasks")
    setTodoData(data)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
    <div className="bg" style={{backgroundColor:"#355E3B"}}>
      <Nav/>
      <div className="container mt-5 ">
        <AddTaskBtn getData={getData} />
        <TodoCard todoData={todoData} getData={getData} />

      </div>
      </div>
    </>
  )
}

export default App