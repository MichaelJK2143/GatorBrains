import React, { useState } from 'react';

export function NameForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const response ={
            "usename": username,
            "email": '4',
            "password": password,
            "name": 'f'
        }
        fetch('http://localhost:3001/createAccount', {
           
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "email": '4',
                "password": password,
                "name": 'f'
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

        alert(`Username submitted: ${password} ${username}`);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flex:"1" }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                <button type="submit" className= "rounded-lg" style={{ margin: '5px', padding: '8px', width: '200px', backgroundColor: 'skyblue', border: 'none', borderRadius: '5px' }}>
                    Submit
                </button>
            </form>
        </div>  
    );
}
