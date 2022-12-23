import React, { useState } from 'react'

export default function UseStateWithObject() {

    const [loginDetails, setLoginDetails] = useState({ firstname: '', lastname: '' })


    const loginProcess = () => {
        console.log(loginDetails)
    }

    const handleChange = (event) => {
        // console.log(event.target.name , ' = ', event.target.value)       
        setLoginDetails({ ...loginDetails, [event.target.name]: event.target.value })

    }

    return (
        <div>
            <p>
                <label>FirstName</label>
                <input type="text" name='firstname'   onChange={handleChange} />
                     
            </p>
            <p>
                <label>LastName</label>
                <input type="text" name="lastname"  onChange={handleChange}    />
                     
             
            </p>

            <p>
                <button onClick={loginProcess}>Login</button>
            </p>

            {JSON.stringify(loginDetails)}
        </div>
    )
}

