import './todolist.css'
import {useState, useEffect} from 'react'

function Todo_List(){

    useEffect(()=>{
        document.title = "To do List"
    }, []);
    
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask =() =>{
        if (newTask.trim() === "") return;
        setTasks(t=>[...t, newTask])
        setNewTask("")
    }

    const deleteTask =(id)=>{
        setTasks(t => t.filter((_, i) => id!==i))
    }
    
    return(
        <>
        <div className="container">
            <h1>To Do List Checklist</h1>

            <ul>
                {
                tasks.map((task, id) => <li key={id}>
                                            <input type="checkbox" onChange={() => deleteTask(id)}></input>
                                            <span className='taskText'>{task}</span> 
                                            <button onClick={() => deleteTask(id)} className='trash' >🗑️</button>
                                        </li>)
                }
            </ul>
        

            <input 
                id="newTask" 
                type="text" 
                placeholder="Add a task" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
                onKeyDown={(e) => e.key === "Enter"? addTask() : null}>

            </input>

            <button 
                className='add' 
                onClick={addTask}>
                Add Task
            </button>

        </div>
        </>
        
    );
}

export default Todo_List