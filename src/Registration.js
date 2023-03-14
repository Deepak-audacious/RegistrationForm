import React, { useState } from 'react'
import './App.css'

const Registration = () => {
    const [name,setName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (e) =>{
            e.preventDefault()

            console.log(`${name} ${lastName} ${email}  ${password}`)
    }
  return (
    <>
        <div className='Registration'>
            <form onSubmit={handleSubmit}>
                <lable className="label">FirstName</lable>
                <input type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="input"
                />




                <lable className="label">LastName</lable>
                <input type="text" 
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                className="input"
                />



                <lable className="label">Email</lable>
                <input type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="input"
                />



                <lable className="label">Password</lable>
                <input type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="input"
                />
            <button className='button' type='submit'>Submit</button>

            </form>
        </div> 
    </>
  )
}

export default Registration
