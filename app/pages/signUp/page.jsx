"use client"

import "./styles.css"
import { useState } from "react"

export default function signUp() {
//name, surname, email, password, repeat,//
//caixa de texto(textArea): caixa de sugestoes//
    return (
        <div className="container-signup">
    
            <div className="container-form">
                <form className="form">

                    <label htmlFor="name">Name</label>
                    <input  
                        required 
                        type="text" 
                        id="name" 
                        placeholder="name" 
                    />

                    <label htmlFor="surname">Surname</label>
                    <input  
                        required 
                        type="text" 
                        id="surname" 
                        placeholder="surname"
                    />

                    
                    <label htmlFor="email">Email</label>
                    <input  
                        required 
                        type="email" 
                        id="email" 
                        placeholder="name@email.com"
                    />

                    <label htmlFor="about">About you</label>
                    <textarea id="about" rows="5" cols="50"></textarea>

                    <label htmlFor="password">Password</label>
                    <input 
                        required 
                        type="password" 
                        id="password" 
                        placeholder="******" 
                    />
                    
                    <label htmlFor="repeat-password">Repeat Password</label>
                    <input 
                        required 
                        type="password" 
                        id="repeat-password" 
                        placeholder="******" 
                    />

                    <div className="container-button">
                        <button className="button">Send</button>
                    </div>

                </form>    
            </div>      
        </div>
    )
}



// <div className="container-button"> 
// <button className="button">Send</button> 
// </div>  