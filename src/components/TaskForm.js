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

    return (
        <section className="section">
            <h2 className="section-title">Add New Task</h2>
            <div className="form-row">
                <label className="form-label">Title *</label>
                <input type="text" className="form-input" placeholder="Enter task title..." />
            </div>
            <div className="form-row">
                <label className="form-label">Description</label>
                <textarea className="form-textarea" placeholder="Enter task description..."></textarea>
            </div>
            <div className="form-row">
                <label className="form-label">Priority</label>
                <select className="form-select">
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
            <button className="btn" onClick={() => onAdd()}>Add Task</button>
        </section>
    );
};

export default TaskForm;
