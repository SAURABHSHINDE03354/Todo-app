import {useState} from 'react'
export function CreateTodo(){
    const [title,setTitle]=useState("")
    const [description,setDescription ]= useState("")
    return <div>
        <input type="text" style={{padding:"10px",margin:"10px"}} placeholder="title" onChange={(e)=>{
            const val = e.target.value;
            setTitle(val)
        }}/><br />
        <input type="text" style={{padding:"10px",margin:"10px"}} placeholder="description" onChange={(e)=>{
            const value = e.target.value;
            setDescription(value);

        }} /><br />
        <button style={{padding:"10px",margin:"10px"}} onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert('Todo added')    
                    })
                    // render network for backend ,versel for frontend
        }}>Add a todo</button>
    </div>
}