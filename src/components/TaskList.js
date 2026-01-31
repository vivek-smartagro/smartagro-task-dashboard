import React from 'react';

/**
 * TASK LIST COMPONENT
 * 
 * YOUR TASK:
 * 1. Map through the 'tasks' prop and render a card for each task.
 * 2. Display: Title, Description, Priority (with appropriate badge class), and Status.
 * 3. Add buttons/controls to change status: 'To Do', 'In Progress', 'Done'.
 * 4. Use 'onUpdateStatus' prop to update a task's status.
 * 5. Handle empty state: Show a message if no tasks match the current filters.
 * 6. Use 'tasks-grid', 'task-card', 'priority-badge' classes.
 * 7. For priority colors, use: 'priority-high', 'priority-medium', 'priority-low' based on the task priority value.
 */

const TaskList = ({ tasks, onUpdateStatus, onDelete }) => {
    if (tasks.length === 0) {
        return <div className="no-tasks">No tasks found. Try adjusting your filters or create a new one!</div>;
    }

    return (
        <div className="tasks-grid">
            {tasks.map(task => (
                <div key={task.id} className="task-card fade-in">
                    {/* Implement Task Card Details here */}

                    <div className="task-title">{task.title}</div>

                    {/* Status Controls */}
                    <div className="task-footer">
                        {/* Buttons to call onUpdateStatus(task.id, 'New Status') */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
