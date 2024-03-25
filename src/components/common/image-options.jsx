'use client'

import React from 'react';
import { Card } from './card';
import { NameForm } from './form';
import { useState } from 'react';

const ImageContainer = ({ children }) => {
    return (
        <div style={Tstyle}>
            {children}
        </div>
    )
}

const Tstyle= {
    backgroundColor: 'lightblue',
    borderRadius: '10px',
    height: '200px',
    minWidth: '200px', // Minimum width to ensure it grows sideways
    flexGrow: 1, // Allow it to grow to fill the screen sideways
    margin: '10px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: "100%"
  }


export const WORK = () => {
    const [image, setImage] = useState('https://marston.uflib.ufl.edu/files/2023/06/1st-Floor-Map.png');
    const [floor, setFloor] = useState("1");

    function setQuery(img, flr) {
        setImage(img);
        setFloor(flr);
    }

    return (
            <div>
                <div style={test}>
                    <Card> 
                        <NameForm image={image} floor={floor}/>
                        <img src={image} style={{ objectFit:"contain", maxWidth: '100%', maxHeight: '100%', marginTop: '10px' }}/>
                    </Card>
                </div>
                <div style={test}>
                <button style={ButtonStyle} onClick={() => setQuery('https://marston.uflib.ufl.edu/files/2023/06/5th-Floor-Map.png', "5")}>5th Floor</button>
                <button style={ButtonStyle} onClick={() => setQuery('https://marston.uflib.ufl.edu/files/2023/06/4th-Floor-Map-1.png', "4")}>4th Floor</button>
                <button style={ButtonStyle} onClick={() => setQuery('https://marston.uflib.ufl.edu/files/2023/06/3rd-Floor-Map.png', "3")}>3rd Floor</button>
                <button style={ButtonStyle} onClick={() => setQuery('https://marston.uflib.ufl.edu/files/2023/06/2nd-Floor-Map.png', "2")}>2nd Floor</button>
                <button style={ButtonStyle} onClick={() => setQuery('https://marston.uflib.ufl.edu/files/2023/06/1st-Floor-Map.png', "1")}>1st Floor</button>
                </div>
            </div>
    )
}

const test = {
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap"
}

const ButtonStyle= {
    backgroundColor: 'lightblue',
    borderRadius: '10px',
    height: '20px',
    minWidth: '200px', // Minimum width to ensure it grows sideways
    flexGrow: 1, // Allow it to grow to fill the screen sideways
    margin: '10px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
}