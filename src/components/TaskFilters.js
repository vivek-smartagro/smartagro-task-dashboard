import React from 'react';

/**
 * TASK FILTERS COMPONENT
 * 
 * YOUR TASK:
 * 1. Implement controlled inputs for Status, Priority, and Search.
 * 2. Update the parent state when filters change.
 */

const TaskFilters = () => {
    // TODO: Implementation needed

    return (
        <section className="section">
            <h3 className="section-title">Filters</h3>
            <div className="filter-grid">
                <div>
                    <label className="form-label">Status</label>
                    <select className="form-select">
                        <option value="all">All</option>
                        <option value="to-do">To Do</option>
                        <option value="in-progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <div>
                    <label className="form-label">Priority</label>
                    <select className="form-select">
                        <option value="all">All</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="search-input-wrapper">
                    <label className="form-label">Search</label>
                    <input type="text" class="form-input" placeholder="Search tasks..." />
                </div>
            </div>
        </section>
    );
};

export default TaskFilters;
