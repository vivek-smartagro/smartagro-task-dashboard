import React from 'react';

/**
 * TASK FILTERS COMPONENT
 * 
 * YOUR TASK:
 * 1. Create a search input that updates 'filters.search'.
 * 2. Create a dropdown for Status: All, To Do, In Progress, Done.
 * 3. Create a dropdown for Priority: All, High, Medium, Low.
 * 4. Use the 'filters' and 'setFilters' props to manage state.
 * 5. Use 'filters-section', 'search-input', 'filter-select' classes.
 */

const TaskFilters = ({ filters, setFilters }) => {
    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="filters-section">
            {/* Implement Search Input */}

            {/* Implement Status Dropdown */}

            {/* Implement Priority Dropdown */}
        </div>
    );
};

export default TaskFilters;
