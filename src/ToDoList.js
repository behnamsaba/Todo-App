import { useState } from "react"
import NewTodoForm from "./NewTodoForm"
import { v4 as uuidv4 } from 'uuid';

const ToDoList = () => {
    const INITIAL = [
        
    ]

    const [tasks, setTask] = useState(INITIAL);

    const addTask = (t) => {
        setTask((tasks) => ([...tasks, {id:uuidv4(), t}]));
    }

    const handleRemove = (id) => {
        setTask(tasks.filter(task => task.id !== id));

    }

    console.log(tasks);
    return(
        <div>
            <NewTodoForm addTask={addTask}/>
            <ul>
                {tasks.map((task) => <li key={task.id}><button onClick={() => handleRemove(task.id)}>X</button>{task.t}</li>)}
            </ul>
        </div>
    )
}

export default ToDoList