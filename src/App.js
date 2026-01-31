import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilters from './components/TaskFilters';
import TaskStats from './components/TaskStats';

function App() {
    // State for tasks
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('smartagro-tasks');
        return saved ? JSON.parse(saved) : [];
    });

    // State for filters
    const [filters, setFilters] = useState({
        status: 'All',
        priority: 'All',
        search: ''
    });

    // Persist tasks to localStorage
    useEffect(() => {
        localStorage.setItem('smartagro-tasks', JSON.stringify(tasks));
    }, [tasks]);

    // Helper: Add new task
    const addTask = (newTask) => {
        const task = {
            ...newTask,
            id: Date.now(),
            status: 'To Do',
            createdAt: new Date().toISOString()
        };
        setTasks([task, ...tasks]);
    };

    // Helper: Update task status
    const updateTaskStatus = (taskId, newStatus) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, status: newStatus } : task
        ));
    };

    // Helper: Delete task
    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    // Logical filtering
    const filteredTasks = tasks.filter(task => {
        const statusMatch = filters.status === 'All' || task.status === filters.status;
        const priorityMatch = filters.priority === 'All' || task.priority === filters.priority;
        const searchMatch = task.title.toLowerCase().includes(filters.search.toLowerCase()) ||
            task.description.toLowerCase().includes(filters.search.toLowerCase());

        return statusMatch && priorityMatch && searchMatch;
    });

    return (
        <div className="container fade-in">
            <header>
                <div className="logo">SmartAgro Task Dashboard</div>
                <div className="current-date">{new Date().toLocaleDateString('en-GB', { dateStyle: 'long' })}</div>
            </header>

            {/* 
        INSTRUCTION: Statistics Dashboard
        Implementation needed in TaskStats.js 
      */}
            <TaskStats tasks={tasks} />

            {/* 
        INSTRUCTION: Task Creation Form
        Implementation needed in TaskForm.js 
      */}
            <TaskForm onAdd={addTask} />

            <div className="main-content">
                <div className="section-header">
                    <h2>Your Tasks</h2>
                    {/* 
            INSTRUCTION: Filtering Controls
            Implementation needed in TaskFilters.js 
          */}
                    <TaskFilters filters={filters} setFilters={setFilters} />
                </div>

                {/* 
          INSTRUCTION: Task Display
          Implementation needed in TaskList.js 
        */}
                <TaskList
                    tasks={filteredTasks}
                    onUpdateStatus={updateTaskStatus}
                    onDelete={deleteTask}
                />
            </div>
        </div>
    );
}

export default App;
