import React, { useState } from 'react';
import '../styles/ChatBox.css';

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { user: 'viewer1', text: 'This looks awesome!' },
    { user: 'codeMaster', text: 'Let’s gooo!' },
    { user: 'TylerDev', text: 'Welcome to the stream everyone!' },
  ]);
  const [input, setInput] = useState('');

  function handleSend(e) {
    e.preventDefault();
    if (input.trim() === '') return;
    setMessages([...messages, { user: 'You', text: input }]);
    setInput('');
  }

  return (
    <div className="chatbox">
      <h3>Live Chat</h3>
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className="message">
            <strong>{msg.user}: </strong> {msg.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="chat-input">
        <input
          type="text"
          placeholder="Send a message..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

