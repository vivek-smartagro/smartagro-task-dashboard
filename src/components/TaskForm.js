import React, { useState } from 'react';

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
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('medium');
    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ title, description, priority });
        setTitle("");
        setDescription("");
        setPriority('medium');
    };
    return (
        <section className="section">
            <h2 className="section-title">Add New Task</h2>
            <div className="form-row">
                <label className="form-label">Title *</label>
                <input type="text" className="form-input" placeholder="Enter task title..." value={title} onChange={(e)=>{
                    setTitle(e.target.value);
                }}/>
            </div>
            <div className="form-row">
                <label className="form-label">Description</label>
                <textarea className="form-textarea" placeholder="Enter task description..." value={description} onChange={(e)=>{
                    setDescription(e.target.value);
                }}></textarea>
            </div>
            <div className="form-row">
                <label className="form-label">Priority</label>
                <select className="form-select" value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
            <button className="btn" onClick={handleSubmit}>Add Task</button>
        </section>
    );
};

export default TaskForm;
