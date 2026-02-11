import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilters from './components/TaskFilters';
import TaskStats from './components/TaskStats';

function App() {
    // STATE MANAGEMENT - Mock data for the candidate to work with
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Complete React Challenge',
            description: 'Build a task management dashboard with React components including forms, lists, and filters',
            priority: 'High',
            status: 'In Progress'
        },
        {
            id: 2,
            title: 'Setup Development Environment',
            description: 'Install Node.js, VS Code, and create React application',
            priority: 'Medium',
            status: 'Done'
        },
        {
            id: 3,
            title: 'Review Documentation',
            description: 'Read React hooks documentation and best practices guide',
            priority: 'Low',
            status: 'To Do'
        }
    ]);

    const [filters, setFilters] = useState({
        status: 'all',
        priority: 'all',
        search: ''
    });

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    // INSTRUCTION: The candidate should implement these functions
    const addTask = (newTask) => {
        console.log('Task to add:', newTask);
        // TODO: Implement task addition logic
        setTasks(prevTasks => [...prevTasks, { ...newTask, id: prevTasks.length + 1 }]);
    };

    const updateTaskStatus = (taskId, newStatus) => {
        console.log('Update task:', taskId, 'to', newStatus);
        // TODO: Implement status update logic
        setTasks(prevTasks => prevTasks.map(task => task.id === taskId ? { ...task, status: newStatus } : task));
    };

    const filteredTasks = tasks.filter(task => {
        console.log(filters.status, filters.priority, filters.search);
        if (filters.status !== 'all' && task.status.toLowerCase().replace(' ', '-') !== filters.status) return false;
        if (filters.priority !== 'all' && task.priority.toLowerCase() !== filters.priority) return false;
        if (filters.search && !task.title.toLowerCase().includes(filters.search.toLowerCase())) return false;
        return true;
    });

    return (
        <div className="mockup-container">
            <h1 className="mockup-title">📱 UI MOCKUP REFERENCE - Task Dashboard</h1>

            <div className="instruction-box">
                <strong>For Candidates:</strong> This mockup shows what your final Task Dashboard should look like.
                Focus on building the React components to match this structure. Professional styling is already provided in App.css!
            </div>

            {/* Statistics Section - Data needs to be calculated dynamically */}
            <TaskStats tasks={tasks} />

            <main className="main-content">
                <aside className="sidebar">
                    {/* Creation Form */}
                    <TaskForm onAdd={addTask} />

                    {/* Filters */}
                    <TaskFilters onFilterChange={handleFilterChange} />
                </aside>

                {/* Task List - Data should be filtered before passing */}
                <TaskList tasks={filteredTasks} onUpdateStatus={updateTaskStatus} />
            </main>

            <div className="wireframe-note">
                <strong>💡 Implementation Notes:</strong>
                <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
                    <li>Use the provided CSS classes in App.css for consistent styling</li>
                    <li>Build each section as a separate React component</li>
                    <li>Connect forms and buttons to update state properly</li>
                    <li>Focus on functionality - styling is already provided!</li>
                </ul>
            </div>
        </div>
    );
}

export default App;
