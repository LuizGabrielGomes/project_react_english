"use client"

import "./styles.css"
import { useState } from "react"

export default function signUp() {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [about, setabout] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [email, setEmail] = useState("")

    function verifyPassword() { 
        if (repeatPassword.length > 0 ) {
            return password !== repeatPassword  
        } else {
            return false  
        }
    }

    return (
        <div className="container-signup">
            
            <div className="container-form">
                <form className="form">

                    <label htmlFor="name">Name</label>
                    <input  
                        required    
                        value={name}
                        onChange={(event) => {setName(event.target.value)}}
                        type="text" 
                        id="name" 
                        placeholder="type your name" 
                    />

                    <label htmlFor="surname">Surname</label>
                    <input  
                        required 
                        type="text" 
                        value={surname}
                        onChange={(event) => {setSurname(event.target.value)}}
                        id="surname" 
                        placeholder="type your surname"
                    />

                    
                    <label htmlFor="email">Email</label>
                    <input  
                        required 
                        type="email"
                        value={email}
                        onChange={(event) => {setEmail(event.target.value)}}
                        id="email" 
                        placeholder="type your e-mail"
                    />

                    <label htmlFor="about">About you</label>

                    <textarea 
                        id="about" 
                        value={about}
                        onChange={(event) => {setabout(event.target.value)}}
                        rows="5" 
                        cols="50" 
                        placeholder="write a short resume about you"
                    ></textarea>

                    <label htmlFor="password">Password</label>
                    <input 
                        required 
                        type="password"
                        value={password}
                        onChange={(event) => {setPassword(event.target.value)}}
                        id="password" 
                        placeholder="******" 
                    />
                    
                    <label htmlFor="repeat-password">Repeat Password</label>
                    <input 
                        required 
                        type="password" 
                        value={repeatPassword}
                        onChange={(event) => {setRepeatPassword(event.target.value)}}
                        id="repeat-password" 
                        placeholder="******" 
                    />

                    {verifyPassword() === true ? <div>Please, type the same password in both fields</div> : null}






                    <div className="container-button">
                        <button className="button">Send</button>
                    </div>

                </form>    
            </div>
            <div>
                <div>Review your data below</div>
                <div>{name}</div>

                <br></br>

                <div>Review your surname</div>
                <div>{surname}</div>

                <br></br>


                <div>review your email</div>
                <div>{email}</div>
                
                <br></br>

                <div>review your text</div>
                <div>{about}</div>
            </div>    
        </div>
    )
}