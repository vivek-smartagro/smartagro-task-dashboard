import React, { useEffect } from 'react';
import TaskList from './TaskList';

/**
 * TASK FILTERS COMPONENT
 * 
 * YOUR TASK:
 * 1. Implement controlled inputs for Status, Priority, and Search.
 * 2. Update the parent state when filters change.
 */

const TaskFilters = ({ onFilterChange }) => {
    // TODO: Implementation needed
    const [selectedStatus, setSelectedStatus] = React.useState('all');
    const [selectedPriority, setSelectedPriority] = React.useState('all');
    const [searchTerm, setSearchTerm] = React.useState('');

    useEffect(() => {
        onFilterChange({ status: selectedStatus, priority: selectedPriority, search: searchTerm });
    }, [selectedStatus, selectedPriority, searchTerm]); 

    return (
        <section className="section">
            <h3 className="section-title">Filters</h3>
            <div className="filter-grid">
                <div>
                    <label className="form-label">Status</label>
                    <select className="form-select" value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)

                    }>
                        <option value="all">All</option>
                        <option value="to-do">To Do</option>
                        <option value="in-progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <div>
                    <label className="form-label">Priority</label>
                    <select className="form-select" value={selectedPriority} onChange={(e) => setSelectedPriority(e.target.value)}>
                        <option value="all">All</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="search-input-wrapper">
                    <label className="form-label">Search</label>
                    <input type="text" className="form-input" placeholder="Search tasks..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
            </div>
        </section>
    );
};

export default TaskFilters;
