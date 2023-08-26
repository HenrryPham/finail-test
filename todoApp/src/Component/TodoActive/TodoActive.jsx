import React, { useContext } from 'react'
import './TodoActive.css'
import { Context } from '../TodoContext/ContextProvider'


function TodoActive() {
    const {
        addTask,
        renderAllTask,
        taskActive,
        taskCompleted,
        onChangeHandler} = useContext(Context)
    return (
        <div className="todoActive-container d-flex justify-content-around flex-column">
            <ul className="nav nav-pills mb-3 d-flex justify-content-around" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Active</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Completed</button>
                </li>
            </ul>
            <hr/>
            <div className="addTodo d-flex">
                <input type="text" className="todoInput p-2 w-100" placeholder="Entrer your task" value={onChangeHandler}/>
                <button onClick={addTask} className="add-button p-2 flex-shrink-1">Add</button>
            </div>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>{renderAllTask}</div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>{taskActive}</div>
                <div className="d-flex tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>{taskCompleted}</div>
            </div>
        </div>

    )
}

export default TodoActive
