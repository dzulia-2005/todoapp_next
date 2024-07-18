export default function submitbtn({reloadTodolist , inputvalue}){

    async function handleSubmitClick(){
        await fetch('https://app-servers.io/api/todos/add', 
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ task : inputvalue}),
            }
      )
     await reloadTodolist()
    }

    return <button class="submitBtn" onClick={handleSubmitClick}>Submit</button>
}