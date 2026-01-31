import React, { useState } from 'react';

/**
 * TASK FORM COMPONENT
 * 
 * YOUR TASK:
 * 1. Create a form with fields: Title (text), Description (textarea), Priority (Select: Low, Medium, High)
 * 2. Implement validation: Title is REQUIRED.
 * 3. On submit, call the 'onAdd' prop with the task object.
 * 4. Clear the form after successful submission.
 * 5. Use the 'form-card', 'form-group', 'btn-primary' classes from App.css
 */

const TaskForm = ({ onAdd }) => {
    // Use state to manage form inputs

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implementation here
    };

    return (
        <div className="form-card">
            <h3>Create New Task</h3>
            <form onSubmit={handleSubmit}>
                {/* Your form fields here */}
                {/* Example: <input type="text" placeholder="Task Title" ... /> */}

                <button type="submit" className="btn-primary">Add Task</button>
            </form>
        </div>
    );
};

export default TaskForm;
