import React from 'react';

/**
 * TASK STATISTICS COMPONENT
 * 
 * YOUR TASK:
 * 1. Calculate and display counts for: Total Tasks, To Do, In Progress, Done.
 * 2. Calculate completion percentage: (Done / Total) * 100.
 * 3. Display a progress bar reflecting the completion percentage.
 * 4. Ensure statistics update in real-time as tasks change.
 * 5. Use 'stats-grid', 'stat-card', 'progress-container', 'progress-bar' classes.
 * 6. Use appropriate headings (h4) and values (p) inside each stat-card.
 */

const TaskStats = ({ tasks }) => {
    // Logic to calculate stats
    const total = tasks.length;
    const done = 0; // Calculate this
    const progress = total > 0 ? (done / total) * 100 : 0;

    return (
        <div className="stats-dashboard">
            <div className="stats-grid">
                <div className="stat-card">
                    <h4>Total Tasks</h4>
                    <p>{total}</p>
                </div>
                {/* Add more stat cards for Statuses */}
            </div>

            <div className="progress-section">
                <label>Overall Progress: {Math.round(progress)}%</label>
                <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </div>
    );
};

export default TaskStats;
