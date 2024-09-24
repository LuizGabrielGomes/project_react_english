"use client"

import "./styles.css"
import { useState } from "react"

export default function signUp() {
//name, surname, email, password, repeat,//
//caixa de texto(textArea): caixa de sugestoes//  
    return (
        <div>
    
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
                        id="Surname" 
                        placeholder="Surname"
                    />

                    
                    <label htmlFor="email">Email</label>
                    <input  
                        required 
                        type="email" 
                        id="email" 
                        placeholder="name@email.com"
                    />

                    <label htmlFor="password">Password</label>
                    <input 
                        required 
                        type="password" 
                        id="password" 
                        placeholder="******" 
                    />
                    
                    <label htmlFor="repeatPassword">Repeat Password</label>
                    <input 
                        required 
                        type="password" 
                        id="repeatPassword" 
                        placeholder="******" 
                    />

                </form>    
            </div>      
        </div>
    )
}
