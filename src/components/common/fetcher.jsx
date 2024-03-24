export async function getData(url, json) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(json)
  })
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export function poster(url, json) {
  return new Promise((resolve, reject) => {
      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(json)
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok.');
          }
          return response.json();
      })
      .then(data => {
          resolve(data); // Resolve the Promise with the received data
      })
      .catch(error => {
          console.error('Error fetching data:', error);
          reject(error); // Reject the Promise with the error
      });
  });
}


export function getter(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error("Response error:", error);
      throw error; // Rethrow the error to handle it in the calling code
    });
}

export function getPoster(url, json) {
  fetch(url, {
        mode: "no-cors",
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
      })
      .then(response => {
        console.log(response)
      })
      .then(data => {
        console.log('Data received:', data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
}