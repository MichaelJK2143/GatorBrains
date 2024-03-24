"use client"

import React, { useState,useEffect } from 'react';
import { MapBorder, redDot } from "./styles";
import { poster, getter,getPoster } from '../common/fetcher';

export const MapPlaceholder = () => {
    const [borderCoordinates, setBorderCoordinates] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const [xRatio, setXRatio] = useState(null);
    const [yRatio, setYRatio] = useState(null);

    const [coursename, setCoursename] = useState('');
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
      console.log(xRatio+" " +yRatio)
      const json = {
        "x": xRatio,
        "y": yRatio,
        "user_id" : 1,
        "course": coursename,
        "floor": 1
      }  
      poster('http://localhost:3001/createNewStudySession', json)
    }
    //get all the session and username on a floor
    //const Users=getter('http://localhost:3001/createNewStudySession')

    const getAllData = () => {
      getter('http://localhost:3001/1/currentFloorSessions')
        .then(responseData => {
          // Check if Sessions array exists in the response data
          if (responseData && responseData.Sessions && Array.isArray(responseData.Sessions)) {
            // Access the Sessions array
            const sessionsArray = responseData.Sessions;
    
            // Iterate over each session object
            sessionsArray.forEach(session => {
              // Access properties of each session object
              console.log("Session ID:", session["Session ID"]);
              console.log("Course:", session.Course);
              console.log("Members:", session.Members);
              console.log("xRatio:", session.x);
              console.log("yRatio:", session.y);
              // Add more properties as needed

              const xDif=borderCoordinates.right-borderCoordinates.left
              const yDif=borderCoordinates.bottom-borderCoordinates.top
              const xcoord=xDif*session.x
              const ycoord=yDif*session.y

            });
          } else {
            console.error("Sessions array not found in response data.");
          }
        })
        .catch(error => {
          // Handle errors here
          console.error("Error fetching data:", error);
        });
    };
    
    //execute on page refresh
    useEffect(() => {
      getAllData();
      console.log('Page refreshed!');
    }, []);
 
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
        <div style={DinoMode}>
          <div style={redDot}></div>
          <input
                    type="text"
                    placeholder="Course"
                    value={coursename}
                    onChange={(e) => setCoursename(e.target.value)}
                    style={{ margin: '3px', padding: '4px', width: '100px', color: "#000000"}}
                />
          <button style={{'backgroundColor':'lightgreen', 'border' : '2px solid black', 'border-radius':'8px', 'padding':'0.3em'}}
            onClick={handleClickSubmit}>Submit</button>
        </div>
      </div>
    )
  }
  