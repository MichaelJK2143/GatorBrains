"use client"

import "@/css/output.css"
import "@/css/colors.json"
import { TextSection } from "@/components/common/text-sections"
import { LinkBar } from "@/components/common/link-bar"
import { MainDivStyle } from "@/css/common"

import { Card } from "@/components/common/card"
import { NameForm } from "@/components/common/form"


export default function Home() {
    return (
        <div>
            <heading>
                <LinkBar links={["Find People", "Around Me", "About"]}/>
            </heading>
            <main>
                <div style={MainDivStyle}>
                    <TextSection heading="Gator Brains">
                        <div>
                            <p>Connect and conquer your courses with Gator Brain!</p>
                            <p>The ultimate study buddy app designed exclusively for the University of Florida community.</p>
                            <p>Enhance your academic journey and ace those exams together!</p>
                        </div>
                    </TextSection>
                    <div style={test}>
                        <Card>
                            <NameForm/>
                        </Card>
                        <Card>
                            
                        </Card>
                    </div>   
                </div>
            </main>
        </div>  
    )
}

const test = {
    display:"flex",
    flexDirection:"row",

}