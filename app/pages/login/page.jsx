"use client"

import { Input } from "postcss"
import { Placeholder } from "react-bootstrap"
import "./styles.css"
import { useState } from "react"

export default function login() {
    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")


const handleChangePassword = (event) => {
    setPassword(event.target.value)
}

const handleChange = (event) => {
    setEmail(event.target.value)
}

    return (    
        <div className="container-login">
            <p>{email}</p>
            <p>{password}</p>

            <div className="container-form">
                <form className="form">
                    <label htmlFor="login" className="login">Login</label>
                    
                    <input 
                        className="input" 
                        required 
                        type="email" 
                        id="login" 
                        placeholder="name@gmail.com" 
                        value={email}
                        onChange={handleChange}
                    />
                
                    <label htmlFor="password" className="password">Password</label>
                    
                    <input 
                        className="input" 
                        required 
                        type="password" 
                        id="password" 
                        placeholder="********" 
                        value={password}
                        onChange={handleChangePassword}
                    />

                    <div className="container-button"> 
                        <button className="button">click</button> 
                    </div>  
                </form>
            </div>
        </div>
    )    
}
