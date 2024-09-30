"use client"

import Link from "next/link"

export function Navbar() {
    return (
        <>
            <header className="header">
                <div className="logo">
                    PhrasalVerbs
                </div>

                <nav className="navbar">
                    <Link href={"/pages/login"}><button className="button-navbar">Login</button></Link>
                    <Link href={"/pages/signUp"}><button className="button-navbar">SignUp</button></Link>
                </nav>
            </header>
        </>

    )
}