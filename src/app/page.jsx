"use client"

import "@/css/output.css"
import "@/css/colors.json"
import { TextSection } from "@/components/common/text-sections"
import { LinkBar } from "@/components/common/link-bar"
import { MainDivStyle } from "@/css/common"

import { WORK } from "@/components/common/image-options"


export default function Home() {
    return (
        <div>
            <LinkBar links={["Find People", "Around Me", "About"]}/>
            <main>
                <div style={MainDivStyle}>
                    <TextSection heading="Gator Brains">
                        <div>
                            <p>Connect and conquer your courses with Gator Brain!</p>
                            <p>The ultimate study buddy app designed exclusively for the University of Florida community.</p>
                            <p>Enhance your academic journey and ace those exams together!</p>
                        </div>
                    </TextSection>
                    <WORK/>
                </div>
            </main>
        </div>  
    )
}

const test = {
    display:"flex",
    flexDirection:"row",
}