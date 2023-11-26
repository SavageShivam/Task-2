import axios from 'axios'
import React, { useState } from 'react'

function AddTaskBtn({ getData }) {
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDesc, setTaskDesc] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { data } = await axios.post("http://localhost:1122/add-task",
            { title: taskTitle, description: taskDesc })
        setTaskDesc('')
        setTaskTitle('')
        getData()
    }
    return (
        <>
            <div className=' my-3 col-lg-6 mx-auto '>
                <button style={{backgroundColor:"wheat"}} type="button" className="btn w-100 py-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Take a note...</button>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Enter Task</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* <h5>Enter Task</h5> */}
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className='mt-3'>
                                    <input type="text" placeholder='Enter Task Title' value={taskTitle} className='form-control'
                                        onChange={(e) => setTaskTitle(e.target.value)} />
                                </div>
                                <div className='mt-3'>
                                    <input type="text" value={taskDesc} placeholder='Enter Task Description' className='form-control'
                                        onChange={(e) => setTaskDesc(e.target.value)} />
                                </div>
                                <div className="mt-3">
                                    <button className='btn btn-primary' type='submit' data-bs-dismiss="modal">Add Task</button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTaskBtn