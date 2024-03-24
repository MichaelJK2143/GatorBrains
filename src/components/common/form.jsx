import React, { useState } from 'react';

export function NameForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    fetch("http://localhost:3001", {mode:"no-cors", method:"get"})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
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
