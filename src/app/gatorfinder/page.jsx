"use client"

import "@/css/output.css"
import "@/css/colors.json"

import { User } from "@/components/map-components/list"
import { LinkBar } from "@/components/common/link-bar"

import { TextSection } from "@/components/common/text-sections"
import { MainDivStyle } from "@/css/common"

import { MapPlaceholder } from "@/components/map-components/map"
import { useSearchParams } from 'next/navigation'

export default function JoeTesting() {
    const searchParams = useSearchParams()
    console.log(searchParams.get('floor'))
    console.log(searchParams.get('image'))
    console.log(searchParams.get('userID'))


    return (
        <div>
            <header>
                <LinkBar></LinkBar>
            </header>
            <main>
                <div style={MainDivStyle}>
                    <TextSection heading="Gator Finder">
                        <p>Find your study buddy!</p>
                    </TextSection>
                </div>
                <div style ={containerMapUser}>
                    <div style = {UserDiv}>
                        <User/>
                    </div>                
                    <div style ={MapDiv}>
                        <MapPlaceholder/>
                    </div>
                </div>
            </main>   
        </div>
    )
}
const TitleStyle ={
    'text-align':'center',
    justifyContent:"center",
    'margin-top': '80px'
}
const containerMapUser ={
    'display' : 'flex',
    'margin-top': '100px',
    'margin-left':'10px',
    'margin-right':'10px',
}
const UserDiv ={
    'margin-left':'90px',
    'width':'800px'
  }
const MapDiv ={
    'margin-right':'90px',
    'width':'800px'
}
  