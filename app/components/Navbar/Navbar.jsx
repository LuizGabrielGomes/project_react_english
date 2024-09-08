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
                    <button className="button-navbar">SignUp</button>
                </nav>
            </header>
        </>

    )
}


{/* <li><Link href={"/pages/termsAndConditions"}>Termos e Condicoes de Uso</Link></li> */}