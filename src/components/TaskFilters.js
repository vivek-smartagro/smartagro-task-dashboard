import { CloudCog } from 'lucide-react';
import React, { useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

/**
 * TASK FILTERS COMPONENT
 * 
 * YOUR TASK:
 * 1. Implement controlled inputs for Status, Priority, and Search.
 * 2. Update the parent state when filters change.
 */

const TaskFilters = ({ tasks, setTasks }) => {
    // TODO: Implementation needed
    const [input, setInput] = useState("")
    const [status, setStaus] = useState("all")
    const [priority, setPriority] = useState("all")

    // tasks.filter((item)=> item.status == status)
    // tasks.filter((item)=> item.priority == priority)

    console.log(input)
    const filterData = tasks && tasks.filter((item)=> item.title.toLowerCase().includes(input.toLowerCase()))
    console.log(filterData)
    // const filterData = tasks && tasks.filter((item)=>item.title.toLowerCase().includes(input.toLowerCase()))



    // console.log(typeof (setTasks))
    // React.useMemo(() => {
    //     //  || p.status == status
    //     //  || p.priority == priority)
    //     setTasks(filterData)
    // }, [input, priority, status])
    // setTasks((prev)=> [...prev,filterData])
    React.useMemo(()=>{
        setTasks((prev)=> [...prev, filterData])
    },[input])
    



    return (
        <section className="section">
            <h3 className="section-title">Filters</h3>
            <div className="filter-grid">
                <div>
                    <label className="form-label">Status</label>
                    <select className="form-select" value={status} onChange={(e) => setStaus(e.target.value)}>
                        <option value="all">All</option>
                        <option value="to-do">To Do</option>
                        <option value="in-progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <div>
                    <label className="form-label">Priority</label>
                    <select className="form-select" value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="all">All</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="search-input-wrapper">
                    <label className="form-label">Search</label>
                    <input type="text" class="form-input" placeholder="Search tasks..." value={input} onChange={(e) => setInput(e.target.value)} />
                </div>
            </div>
        </section>
    );
};

export default TaskFilters;