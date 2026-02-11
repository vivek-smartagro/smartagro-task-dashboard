import React from 'react';

/**
 * TASK LIST COMPONENT
 * 
 * YOUR TASK:
 * 1. Map through the tasks and render task cards.
 * 2. Apply correct badge classes based on status and priority.
 * 3. Handle button clicks to update mission status.
 */

const TaskList = ({ tasks, onUpdateStatus }) => {
    // TODO: Implementation needed
    const handleUpdateStatus = (taskId, newStatus) => {
        onUpdateStatus(taskId, newStatus);
    };
    return (
        <section className="section">
            <h3 className="section-title">Tasks ({tasks.length})</h3>
            <div className="task-list">
                {/* EXAMPLE TASK CARD (HARDCODED FOR UI REFERENCE) */}
                {/* <div className="task-card">
                    <h4 className="task-title">Complete React Challenge</h4>
                    <p className="task-description">Build a task management dashboard with React components</p>
                    <div className="task-meta">
                        <span className="badge priority-high">HIGH</span>
                        <span className="badge status-progress">IN PROGRESS</span>
                    </div>
                    <div className="task-actions">
                        <button className="btn-sm btn-warning">Move to Done</button>
                        <button className="btn-sm btn-danger">Move to To Do</button>
                    </div>
                </div> */}
                
                {/* Candidate should map actual task list here */}
                {tasks.map(task => (
                    <div key={task.id} className="task-card">
                        <h4 className="task-title">{task.title}</h4>
                        <p className="task-description">{task.description}</p>
                        <div className="task-meta">
                            <span className={`badge priority-${task.priority}`}>{task.priority}</span>
                            <span className={`badge status-${task.status}`}>{task.status}</span>
                        </div>
                        <div className="task-actions">
                            {task.status !== 'To Do' && (
                                <button className="btn-sm btn-warning" onClick={() => handleUpdateStatus(task.id, 'To Do')}>Move to To Do</button>
                            )}
                            {task.status !== 'In Progress' && (
                                <button className="btn-sm btn-primary" onClick={() => handleUpdateStatus(task.id, 'In Progress')}>Move to In Progress</button>
                            )}
                            {task.status !== 'Done' && (
                                <button className="btn-sm btn-success" onClick={() => handleUpdateStatus(task.id, 'Done')}>Move to Done</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TaskList;
