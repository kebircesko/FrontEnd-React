import { useState, useEffect } from 'react';
import { Students } from '../data/jsonData'; // importojmë JSON-in lokal

function Users() {
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2>Users List from API</h2> 
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>

      <h2>Users from Local JSON</h2>
      <ul>
        {Students.map(s => (
          <li key={s.id}>{s.name} – {s.age} vjeç</li>
        ))}
      </ul>
    </div>
  );
}
export default Users;