export default function myinput({inputvalue,setinputvalue}){

    function handleinputChange(event){
        let inputText = event.target.value
        setinputvalue(inputText)
    }

    return <input class="textInput" type="text" setinputvalue={setinputvalue} value={inputvalue} onChange={handleinputChange} placeholder="Enter todo here"/>
}