"use client"

import { Input } from "postcss"
import { Placeholder } from "react-bootstrap"
import "./styles.css"

export default function login() {
    return (
        <>
            <div class="container">
                <form class="form">
                    <label htmlFor="login" class="login">Login</label>
                    
                    <input class="input" required type="email" id="login" placeholder="name@gmail.com" />


                    <label htmlFor="password" class="password" >Password</label>
                    <input class="input" required type="password" id="password" placeholder="********" />

                    <div class="container-button"> 
                        <button class="button">click</button> 
                    </div>  
                </form>
            </div>
        </>
    )    
}
