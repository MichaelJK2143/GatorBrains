"use client"

import React, { useState } from 'react';

import { GatorTitle, GatorSubTitle, UserTitle, Userlist, UserName, MapBorder, redDot } from './styles';


export const Title = () => { 
  return (
    <div>
      <h1 style={GatorTitle}>Gator Finder</h1>
      <h3 style={GatorSubTitle}>find your study Buddy</h3>
    </div>
  )
}

export const User= () =>{
  return (
  <div style={Userlist}>
    <h2 style ={UserTitle}>Active User</h2>
    <ul>
      <li style={UserName}>User1</li>
      <li style={UserName}>User2</li>
      <li style={UserName}>User3</li>
      <li style={UserName}>User4</li>
      <li style={UserName}>User5</li>
    </ul>
  </div>
  )
}

export const MapPlaceholder = () => {
  const [borderCoordinates, setBorderCoordinates] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [xRatio, setXRatio] = useState(null);
  const [yRatio, setYRatio] = useState(null);

  const [ pin, setPin ] = useState({ x:null, y:null });

  const handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setMousePosition({ x, y });
    const rect = event.currentTarget.getBoundingClientRect();
    const coordinates = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left
    };
    setBorderCoordinates(coordinates);
  };
  const handleClick =() => {
    const xDif=borderCoordinates.right-borderCoordinates.left
    const yDif=borderCoordinates.bottom-borderCoordinates.top
    const fromLeftBorder=mousePosition.x-borderCoordinates.left
    const fromTopBorder=mousePosition.y-borderCoordinates.top
    const xRatio=fromLeftBorder/xDif
    const yRatio=fromTopBorder/yDif
    if(xRatio>=1 || xRatio <=0) return -1
    if(yRatio>=1 || yRatio <=0) return -1

    setXRatio(xRatio);
    setYRatio(yRatio);

    setPin(mousePosition);
  }

  //send coordinates to backend
  const handleClickSubmit =() => {
    console.log("hi")
    fetch('http://localhost:3001/createNewStudySession', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "xRatio": xRatio,
                "yRatio": yRatio,
            })

        })
        .then(response => {
          // Check if the response status is OK (200-299)
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // Parse the response as JSON
          return response.json();
        })
        .then(data => {
          // Process the JSON data
          console.log('Data received:', data);
        })
        .catch(error => {
          // Handle errors
          console.error('Error fetching data:', error);
        });
  }

  const DinoMode = {
    position:"absolute",
    left: pin.x + (typeof window !== 'undefined' ? window.scrollX : 0),
    top: pin.y + (typeof window !== 'undefined' ? window.scrollY : 0)
  }

  return (
    <div style={MapBorder} >
      <img src="https://marston.uflib.ufl.edu/files/2023/06/1st-Floor-Map.png"
        style={{ maxWidth: '90%', maxHeight: '90%', margin: 'auto', 'margin-top': '7%' }}
        onMouseMove={handleMouseMove} onClick={handleClick} alt='marston-map'></img>
      <p>Border Top: {borderCoordinates?.top}</p>
      <p>Border Right: {borderCoordinates?.right}</p>
      <p>Border Bottom: {borderCoordinates?.bottom}</p>
      <p>Border Left: {borderCoordinates?.left}</p>
      <p>Mouse X: {mousePosition.x}</p>
      <p>Mouse Y: {mousePosition.y}</p>
      <p>ratio X: {xRatio}</p>
      <p>ratio Y: {yRatio}</p>
      <div style={DinoMode}>
        <div style={redDot}></div>
        <button style={{'backgroundColor':'lightgreen', 'border' : '2px solid black', 'border-radius':'8px', 'padding':'0.3em'}} onclick={handleClickSubmit}>Submit</button>
      </div>
    </div>
  )
}
