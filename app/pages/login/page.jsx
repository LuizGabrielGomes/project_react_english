"use client"

import { Input } from "postcss"


export default function login() {
    return (
        <>
        
            <form>
                <label htmlFor="login">login</label>
                <input required type="email" id="login" />
                <br></br>
                <br></br>
                <label htmlFor="password">password</label>
                <input required type="password" id="password" />
                <br></br>
                <br></br>
                <button>click</button> 
            </form>
        </>
    )    
}
