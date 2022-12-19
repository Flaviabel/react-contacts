import './App.css';
import contactsArray from './contacts.json'
import { useState } from 'react';

function App() {
  const [contacts, setContacs] = useState([contactsArray[0], contactsArray[1], contactsArray[2], contactsArray[3], contactsArray[4]]);

  function randomContact() {
    const contactRandom= contactsArray[Math.floor(Math.random() * ((contactsArray.length - 1) - 5 + 1)) + 5]
    setContacs([...contacts, contactRandom]);
  }

  return (
    <div>
      <button onClick={randomContact}> Add random contact</button>
      <table className="App">
        <tr className='nav'>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy 🏆</th>

        </tr>
        {contacts.map(contacts => {
          return (
            <tr className='contacts' key={contacts.id}>
              <td><img src={contacts.pictureUrl}></img></td>
              <td>{contacts.name}</td>
              <td>{contacts.popularity}</td>
              <td>{contacts.wonOscar ? <i>🏆</i> : ""}</td>
              <td>{contacts.wonEmmy ? <i>🏆</i> : ""}</td>
            </tr>
          )
        })
        }
      </table>
    </div>
  );
}

export default App;

