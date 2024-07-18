"use client"

export default function Todolist({ reloadTodolist , apiUrl ,Todolist }){

    async function deletetodo(todoId){
        await fetch(`${apiUrl}/delete/${todoId}`, 
            {
              method: 'POST',
            }
      )

      reloadTodolist();
    }

    return <div className="todolist">
        {
            Todolist.map((todo)=>{
                return <div class="todoItem">
                            <div class="todoCheckbox">
                                <input data-todoid="762" type="checkbox"/>
                            </div>
                            <div class="todoName">{todo.task}</div>
                            <div class="actions">
                                <span class="btnEdit" >Edit</span>
                                <span class="btnDelete" onClick={()=>{deletetodo(todo.id)}}>delete</span>
                            </div>
                        </div>
            })
        }
    </div>
}

