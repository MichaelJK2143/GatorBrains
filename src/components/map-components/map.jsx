import React, { useState, useEffect } from 'react';
import { MapBorder, redDot } from "./styles";
import { poster, getter, getPoster } from '../common/fetcher';

export const MapPlaceholder = () => {
    const [borderCoordinates, setBorderCoordinates] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const [xRatio, setXRatio] = useState(null);
    const [yRatio, setYRatio] = useState(null);

    const [coursename, setCoursename] = useState('');
    const [pin, setPin] = useState({ x: null, y: null });

    const [xValues, setXValues] = useState([]);
    const [yValues, setYValues] = useState([]);
    const [sessions, setSessions] = useState([]);

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

    const handleClick = () => {
        if (!borderCoordinates) return;
        
        const xDif = borderCoordinates.right - borderCoordinates.left;
        const yDif = borderCoordinates.bottom - borderCoordinates.top;
        const fromLeftBorder = mousePosition.x - borderCoordinates.left;
        const fromTopBorder = mousePosition.y - borderCoordinates.top;
        const xRatio = fromLeftBorder / xDif;
        const yRatio = fromTopBorder / yDif;
        if (xRatio >= 1 || xRatio <= 0) return -1;
        if (yRatio >= 1 || yRatio <= 0) return -1;

        setXRatio(xRatio);
        setYRatio(yRatio);

        setPin(mousePosition);
    };

    const handleClickSubmit = () => {
        console.log(xRatio + " " + yRatio);
        const json = {
            "x": xRatio,
            "y": yRatio,
            "user_id": 1,
            "course": coursename,
            "floor": 1
        };  
        poster('http://localhost:3001/createNewStudySession', json);
    };

    const getAllData = () => {
        getter('http://localhost:3001/1/currentFloorSessions')
            .then(responseData => {
                if (responseData && responseData.Sessions && Array.isArray(responseData.Sessions)) {
                    const sessionsArray = responseData.Sessions;
                    const xList = sessionsArray.map(session => session.x);
                    const yList = sessionsArray.map(session => session.y);
                    setXValues(xList);
                    setYValues(yList);
                    setSessions(sessionsArray);
                } else {
                    console.error("Sessions array not found in response data.");
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };
    
    useEffect(() => {
        getAllData();
    }, []);

    const DinoMode = {
        position: "absolute",
        left: pin.x + (typeof window !== 'undefined' ? window.scrollX : 0),
        top: pin.y + (typeof window !== 'undefined' ? window.scrollY : 0)
    };

    return (
        <div style={MapBorder}>
            <img
                src="https://marston.uflib.ufl.edu/files/2023/06/1st-Floor-Map.png"
                style={{ maxWidth: '90%', maxHeight: '90%', margin: 'auto', marginTop: '7%' }}
                onMouseMove={handleMouseMove}
                onClick={handleClick}
                alt='marston-map'
            />
            {borderCoordinates && xValues.map((x, index) => (
                <div
                    key={index}
                    style={{
                        ...DinoMode,
                        left: (x * (borderCoordinates.right - borderCoordinates.left)) + borderCoordinates.left,
                        top: (yValues[index] * (borderCoordinates.bottom - borderCoordinates.top)) + borderCoordinates.top,
                        background: 'red',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',  
                        position: 'absolute'
                    }}
                ></div>
            ))}
            <div style={DinoMode}>
                <div style={redDot}></div>
                <input
                    type="text"
                    placeholder="Course"
                    value={coursename}
                    onChange={(e) => setCoursename(e.target.value)}
                    style={{ margin: '3px', padding: '4px', width: '100px', color: "#000000" }}
                />
                <button
                    style={{ 'backgroundColor': 'lightgreen', 'border': '2px solid black', 'border-radius': '8px', 'padding': '0.3em' }}
                    onClick={handleClickSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};