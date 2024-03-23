"use client"

import { HomePage } from "@/components/component/home-page"
import "../css/output.css"
import "../css/colors.css"
import { HomeTextSection } from "@/components/home-elements/home-text-sections"

export default function Home() {
    return (
        <div style={container}>
            <div style={test}>
                <HomeTextSection>Gator Stuff Description</HomeTextSection>
            </div>
        </div>
    )
}

const test = {
    position:"relative",
    top:window.innerHeight*0.1
}

const container = {
    left:0,
    right:0,
  
    marginLeft: "auto",
    marginRight: "auto",
  
    position: "absolute",
    width: "80%",
  
    background: "white",
    textAlign: "center"
  }