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

    return (
        <section className="section">
            <h3 className="section-title">Tasks ({tasks.length})</h3>
            <div className="task-list">
                {/* EXAMPLE TASK CARD (HARDCODED FOR UI REFERENCE) */}
                <div className="task-card">
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
                </div>

                {/* Candidate should map actual task list here */}
            </div>
        </section>
    );
};

export default TaskList;
