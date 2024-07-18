"use client"

import "./main.css"
import Todolists from "@/components/Todosia"
import CreateTodo from "@/components/createtodo"
import { useEffect,useState } from "react"


export default function todoapp(){
  const[inputvalue,setinputvalue]=useState("initial text")
  const [Todolist,setTodolist] = useState([]);

  async function reloadTodolist(){
    let response = await fetch(apiUrl);
    let todos = await response.json();
    setTodolist(todos);
  }

  useEffect(async() => {
    reloadTodolist()
  },[])

const[apiUrl,setApiUrl]=useState("https://app-servers.io/api/todos")


  return (
    <div class="container">
    <div class="todoApp">
        <div class="todoHeader">
            Todos (<span class="todosCount">~</span>)
        </div>
        <div class="todoBody">
             <CreateTodo reloadTodolist = {reloadTodolist} setinputvalue={setinputvalue} inputvalue = {inputvalue} apiUrl={apiUrl}/>
             <Todolists reloadTodolist = {reloadTodolist} Todolist = {Todolist} setTodolist={setTodolist} apiUrl={apiUrl}/>
        </div> 
    </div>
</div>
  );
};