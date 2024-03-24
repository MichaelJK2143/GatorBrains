export function poster(url, json) {
    fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Data received:', data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
}

export function getter(url) {
  fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log("Response data:", data);  // Print the response data
  })
  .catch(error => {
    console.log("Response error:", data)
  });
}