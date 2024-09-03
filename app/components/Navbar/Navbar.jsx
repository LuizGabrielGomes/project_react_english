"use client"

import Link from "next/link"

export function Navbar() {
    return (
        <>
            <header class="header">
                <div class="logo">
                    PhrasalVerbs
                </div>

                <nav class="navbar">
                    <Link href={"/pages/login"}><button class="button-navbar">Login</button></Link>
                    <button class="button-navbar">SignUp</button>
                </nav>
            </header>
        </>

    )
}


{/* <li><Link href={"/pages/termsAndConditions"}>Termos e Condicoes de Uso</Link></li> */}