import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);

  function onAuth(data) {
    setUser(data.user || { username: data.username });
    if (data.token) localStorage.setItem('token', data.token);
  }

  return (
    <div className="App">
      {!user ? (
        <div>
          {showSignUp ? (
            <SignUp onSignedUp={onAuth} />
          ) : (
            <Login onLogin={onAuth} />
          )}
          <div style={{ textAlign: 'center', marginTop: 12 }}>
            <button onClick={() => setShowSignUp(s => !s)} className="link-btn">
              {showSignUp ? 'Have an account? Log in' : "Don't have an account? Sign up"}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2>Welcome, {user.username || 'User'}!</h2>
        </div>
      )}
    </div>
  );
}

export default App;

