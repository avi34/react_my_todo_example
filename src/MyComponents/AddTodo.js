import React, { useState } from 'react'


const AddTodo = (props) => {
    const [name, setName] = useState("");
    const [discreption, setDiscreption] = useState("");

    const submit = (e) => {
        e.preventDefault()
        if (!name || !discreption) {
            alert("name or discreption can not be null")
        }
        else {

            props.addTodo(name, discreption)
            setName("")
            setDiscreption("")
        }

    }

    return (
        <>
            <div className='container'>
                <h3>add todo</h3>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            aria-describedby="emailHelp"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="discreption" className="form-label">
                            discreption
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="discreption"
                            value={discreption}
                            onChange={(e) => { setDiscreption(e.target.value) }}
                        />
                    </div>

                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>
                </form>
            </div>

        </>
    )
}

export default AddTodo
