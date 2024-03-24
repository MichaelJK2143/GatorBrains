'use client'

import React from 'react';
import { Card } from './card';
import { NameForm } from './form';
import { Car } from 'lucide-react';
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

export function ImageWithOptions() {
  return (
    <ImageContainer> 
        <img src="https://marston.uflib.ufl.edu/files/2023/06/1st-Floor-Map.png" style={{ flexShrink:"0", maxWidth: '100%', maxHeight: '100%', marginTop: '10px' }}></img>
        <SelectionMenu></SelectionMenu>
    </ImageContainer>

      
  );
}


export const WORK = () => {
    const [image, setImage] = useState('https://marston.uflib.ufl.edu/files/2023/06/1st-Floor-Map.png');

    return (
            <div>
                <div style={test}>
                    <Card> 
                        <NameForm/>
                        <img src={image} style={{ objectFit:"contain", maxWidth: '100%', maxHeight: '100%', marginTop: '10px' }}/>
                    </Card>
                </div>
                <div style={test}>
                <button style={ButtonStyle} onClick={() => setImage('https://marston.uflib.ufl.edu/files/2023/06/5th-Floor-Map.png')}>5th Floor</button>
                <button style={ButtonStyle} onClick={() => setImage('https://marston.uflib.ufl.edu/files/2023/06/4th-Floor-Map-1.png')}>4th Floor</button>
                <button style={ButtonStyle} onClick={() => setImage('https://marston.uflib.ufl.edu/files/2023/06/3rd-Floor-Map.png')}>3rd Floor</button>
                <button style={ButtonStyle} onClick={() => setImage('https://marston.uflib.ufl.edu/files/2023/06/2nd-Floor-Map.png')}>2nd Floor</button>
                <button style={ButtonStyle} onClick={() => setImage('https://marston.uflib.ufl.edu/files/2023/06/1st-Floor-Map.png')}>1st Floor</button>
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