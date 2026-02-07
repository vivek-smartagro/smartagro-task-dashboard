import { CloudCog } from 'lucide-react';
import React, { useState } from 'react';

// debugger;
/**
 * TASK FORM COMPONENT
 * 
 * YOUR TASK:
 * 1. Capture user input for Title, Description, and Priority.
 * 2. On "Add Task" click, call the onAdd prop.
 * 3. Clear the form after submission.
 */

const TaskForm = ({ onAdd }) => {
    // TODO: Implementation needed
    const [input,setInput] = useState({
        id:Date.now(),
        title:"",
        desc:"",
        priority:"",
        status:""
    })

    const handleChange = (e)=>{
        const {name,value} = e.target
        setInput((prev)=>({...prev,[name]:value} ))
    }
    console.log(input)


    return (
        <section className="section">
            <h2 className="section-title">Add New Task</h2>
            <div className="form-row">
                <label className="form-label">Title *</label>
                <input type="text" className="form-input" placeholder="Enter task title..." name='title' onChange={handleChange} value={input.title} />
            </div>
            <div className="form-row">
                <label className="form-label">Description</label>
                <textarea className="form-textarea" placeholder="Enter task description..." onChange={handleChange} name='desc' value={input.desc}></textarea>
            </div>
            <div className="form-row">
                <label className="form-label">Priority</label>
                <select className="form-select" value={input.priority} name='priority' onChange={handleChange} >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
             <div className="form-row">
                <label className="form-label">Priority</label>
                <select className="form-select" value={input.priority} name='status' onChange={handleChange} >
                    <option value="todo">To do</option>
                    <option value="inprogress">In Progress</option>
                    <option value="done">Done</option>
                </select>
            </div>
            <button className="btn" onClick={() => onAdd(input)}>Add Task</button>
        </section>
    );
};

export default TaskForm;
