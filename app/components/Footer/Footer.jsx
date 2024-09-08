"use client"

import Link from "next/link"
import { SocialIcon } from "react-social-icons"

export function Footer() {
    return (
        <>
            <footer className="footer">

                <div className="footer-conteudo">

                    <div className="footer-section">
                        <h3>About</h3>
                        <p>
                            Page about phrasal verb
                        </p>
                    </div>

                    <div className="footer-section">
                        <h3>Contact</h3>
                        <ul className="list">
                            <li><Link href={"mailto:contato@gmail.com"}>contact@gmail.com</Link></li>
                        </ul> 
                    </div>

                    <div className="footer-section">
                        <h3>Social Media</h3>
                        <ul className="list-social-media">
                            <li>
                                <SocialIcon style={{ height: 30, width: 30 }} url="" network="facebook" />                         
                            </li>

                            <li>
                                <SocialIcon style={{ height: 30, width: 30 }} url="" network="instagram" />                            
                            </li>

                            <li>
                                <SocialIcon style={{ height: 30, width: 30 }} url="" network="linkedin" />
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Policies</h3>
                        <ul className="list">
                            <li><Link href={"/pages/termsAndConditions"}>Terms And Conditions</Link></li>
                            <li><Link href={"/pages/privacyPolicy"}>Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                                    
                <div>        
                    <p>     
                        © 2023 Luiz Gabriel Gomes. All rights reserved.
                    </p>
                </div>

            </footer>
        </>

    )
}
