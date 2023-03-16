import { useState } from "react"
const NewTodoForm = ({addTask}) => {
    const [formData, setFormData] = useState("");

    const formHandler = (e) => {
        setFormData(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(formData);
        setFormData("");
    }


    


    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">To Do</label>
            <input type="text" id="todo" name="todo" placeholder="Task"  value={formData} onChange={formHandler}/>
            <button>Add</button>
        </form>
    )

}

export default NewTodoForm