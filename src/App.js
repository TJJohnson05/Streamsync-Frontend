import React, { useState } from 'react';
import Login from './Login';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {!user ? (
        <Login onLogin={setUser} />
      ) : (
        <h2>Welcome! You’re logged in.</h2>
      )}
    </div>
  );
}

export default App;
