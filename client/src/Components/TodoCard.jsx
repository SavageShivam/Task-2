import axios from 'axios'
import React from 'react'
import {BsTrash} from "react-icons/bs"

function TodoCard({ todoData, getData }) {
    const DeleteTask = async (id) => {
        const { data } = await axios.delete(`http://localhost:1122/delete-task/${id}`)
        getData()

    }

    return (
        <>
            <div className='row g-5 mt-3'>
                {
                    todoData.map((item) => (
                        <div className="col-lg-4" key={item.id} >
                            <div className='border rounded p-3' style={{backgroundColor:"wheat"}}>
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p>{item.created_at}</p>
                                    </div>
                                    <div>
                                        <button className='btn  rounded' style={{color:"#355E3B"}} onClick={() => DeleteTask(item.id)}><BsTrash/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default TodoCard