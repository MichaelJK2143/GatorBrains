"use client"

import React, { useState } from 'react';
import { poster, getData } from './fetcher';
import Link from 'next/link';

export function NameForm({ image, floor }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userID, setUserID] = useState('2');

    const link = { 
        "pathname": '/gatorfinder', 
        "query": { "image":image, "floor":floor, "userID":userID }
    }

    const json = {
        "username" : username,
        "password" : password
    }

    
  const handleClick = async () => {
    try {
      const response = await fetch('https://localhost:3001/createAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // Add any other headers if needed
        },
        body: JSON.stringify(json) // Replace 'key' and 'value' with your actual data
      });
      
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flex:"1" }}>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input
                    type="text"
                    placeholder="Username"
                    className= "rounded-lg"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ margin: '5px', padding: '8px', width: '200px', color: "#000000"}}
                />
                <input
                    type="text"
                    placeholder="Password"
                    className= "rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ margin: '5px', padding: '8px', width: '200px', color: "#000000"}}
                />
                <Link href={link}>
                    <button onClick={handleClick} type="submit" className= "rounded-lg" style={{ margin: '5px', padding: '8px', width: '200px', backgroundColor: 'skyblue', border: 'none', borderRadius: '5px' }}>
                        Submit
                    </button>
                </Link>
            </form>
        </div>  
    );
}
