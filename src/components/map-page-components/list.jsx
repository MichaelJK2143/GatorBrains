"use client"

import React, { useState } from 'react';

export const Title = () => {
  const GatorTitle = {
    'fontSize':'60px',
    'color':'blue',
    'font-weight': 'bold'
  }
  const GatorSubTitle= {
    'fontSize':'30px'
  }
  return (
    <div>
      <h1 style={GatorTitle}>Gator Finder</h1>
      <h3 style={GatorSubTitle}>find your study Buddy</h3>
    </div>
  )
}

export const User= () =>{
  const Userlist ={
    'align-self' : 'flex-end',
    'margin' : 'auto',
    'width' : '90%',
    'border' : '3px solid black',
    'border-radius' :'30px',
    'background-color':"lightgray",
    'height':'600px'
  }
  const UserTitle ={
    'margin':'1em 0',
    'fontSize':'35px',
    'text-align':'center',
    'font-weight':'bold',
    'color' : 'red'
  } 
  const UserName ={
    'border' : '1px solid black',
    'border-radius': '10px',
    'text-align':'center',
    'fontSize' : '20px',
    'padding' : '20px',
    'margin': '3% 10% 3% 10%'
  }

  return (
  <div style={Userlist}>
    <h2 style ={UserTitle}>Active User</h2>
    <ul>
      <li style={UserName}>User0</li>
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

    setXRatio(xRatio);
    setYRatio(yRatio);
  }

  const h1_style ={
    'fontSize':'25px',
    'margin' : 'auto'
  }
  const MapBorder = {
    'border' : '3px solid black',
    'border-radius' :'30px',
    'width':'90%',
    'background-color':'lightgrey',
    'height':'600px'

  }

  return (
    <div style={MapBorder} onMouseMove={handleMouseMove} onClick={handleClick}>
      <img src="https://marston.uflib.ufl.edu/files/2023/06/1st-Floor-Map.png" style={{ maxWidth: '90%', maxHeight: '90%', margin: 'auto', 'margin-top': '7%' }}></img>
      <p>Border Top: {borderCoordinates?.top}</p>
      <p>Border Right: {borderCoordinates?.right}</p>
      <p>Border Bottom: {borderCoordinates?.bottom}</p>
      <p>Border Left: {borderCoordinates?.left}</p>
      <p>Mouse X: {mousePosition.x}</p>
      <p>Mouse Y: {mousePosition.y}</p>
      <p>ratio X: {xRatio}</p>
      <p>ratio Y: {yRatio}</p>
    </div>
  )
}