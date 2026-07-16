import './todolist.css'
import {useState} from 'react'

function Todo_List(){

    const [tasks, setTasks] = useState([]);
    
    const addTask =(e) =>{
        const task = document.getElementById("newTask").value
        setTasks([...tasks, task])
        document.getElementById("newTask").value = ""
    }

    const deleteTask =(id)=>{
        setTasks(tasks.filter((_, i) => id!==i))
    }
    
    return(
        <>
        <div className="container">
            <h1>To Do List Checklist</h1>

            <ul>
                {tasks.map((task, id) => <li key={id}><input type="checkbox" onChange={() => deleteTask(id)}></input>{task} <button onClick={() => deleteTask(id)} className='trash' >🗑️</button></li>)}
            </ul>
        

            <input id="newTask" type="text" placeholder="Add a task"></input>
            <button className='add' onClick={addTask}>Add Task</button>
        </div>
        </>
        
    );
}

export default Todo_List