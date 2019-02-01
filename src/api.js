const baseUrl = 'https://players-api.developer.alchemy.codes';

const token = localStorage.getItem('token');

export function registerUser(data) {
  return fetch(`${baseUrl}/api/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(response => console.log('Success: ', JSON.stringify(response)))
    .catch((error) => {
      console.error('Error: ', error);
    });
}

export function loginUser(data) {
  return fetch(`${baseUrl}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(response => console.log('Success: ', JSON.stringify(response)))
    .catch((error) => {
      console.error('Error: ', error);
    });
}

export function getRoster() {
  return fetch(`${baseUrl}/api/players`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(response => response.json());
}

export function addPlayer() {
  return fetch(`${baseUrl}/api/user`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(response => console.log('Success: ', JSON.stringify(response)))
    .catch((error) => {
      console.error('Error: ', error);
    });
}

export function removePlayer() {
  return console.log('player removed');
}
