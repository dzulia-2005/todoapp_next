"use client"

import { useState } from "react"
import SubmitBtn from "@/components/submitbtn"
import Myinput from "@/components/myinput"

export default function createTodo({reloadTodolist,setinputvalue,inputvalue,apiUrl}){
    return <div class="createTodo">
                <Myinput setinputvalue={setinputvalue}/>
                <SubmitBtn reloadTodolist = {reloadTodolist} inputvalue={inputvalue} setinputvalue={setinputvalue}/>
          </div>
}