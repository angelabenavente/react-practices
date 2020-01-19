const ENDPOINT = 'https://randomuser.me/api/?results=10';

const fetchUsers = () => {
  return (
  fetch(ENDPOINT)
    .then(response => response.json())
  )
}

export {fetchUsers};