import React from 'react';

/**
 * TASK STATISTICS COMPONENT
 * 
 * YOUR TASK:
 * 1. Calculate counts for: To Do, In Progress, Done.
 * 2. Calculate completion percentage: (Done / Total) * 100.
 * 3. Update the width of the .progress-fill div and the percentage text.
 */

const TaskStats = ({ tasks }) => {
    // TODO: Implementation needed
    const todo = 5;
    const inProgress = 3;
    const done = 8;
    const progress = 60; // Example static value from mockup

    return (
        <header className="header-section">
            <h1 className="header-title">SmartAgro Task Dashboard</h1>
            <div className="stats-row">
                <div className="stat-box">To Do: {todo}</div>
                <div className="stat-box">In Progress: {inProgress}</div>
                <div className="stat-box">Done: {done}</div>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
                <div>{progress}% Complete</div>
            </div>
        </header>
    );
};

export default TaskStats;
