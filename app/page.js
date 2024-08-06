"use client"

import "./style.css";
import { Navbar } from "./components/Navbar/Navbar"
import { Card } from "./components/Card/Card"
import { MainSection } from "./components/MainSection/MainSection"
import { Questions } from "./components/Questions/Questions"
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <MainSection />

      <Card />
    
      <Questions />

      <Footer />
    </> 
  )
}