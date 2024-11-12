import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import Navbar1 from './Navbar1';

const socket = io('http://localhost:8080'); 

const ChatSocket = () => {
  const [messages, setMessages] = useState([]); 
  const [newMessage, setNewMessage] = useState(''); 
  const [username, setUsername] = useState('');
  const [joined, setJoined] = useState(false); 

  useEffect(() => {
    const handleIncomingMessage = (messageData) => {
      setMessages((prevMessages) => [...prevMessages, messageData]);
    };

    const handleUserJoined = (userData) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { system: true, text: `${userData.username} joined the chat.` },
      ]);
    };

    const handleUserLeft = (userData) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { system: true, text: `${userData.username} left the chat.` },
      ]);
    };

    socket.on('message', handleIncomingMessage);
    socket.on('userJoined', handleUserJoined);
    socket.on('userLeft', handleUserLeft);

    return () => {
      socket.off('message', handleIncomingMessage);
      socket.off('userJoined', handleUserJoined);
      socket.off('userLeft', handleUserLeft);
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const messageData = {
        username,
        text: newMessage,
        timestamp: new Date().toLocaleTimeString(),
      };
      socket.emit('newMessage', messageData);
      setMessages((prevMessages) => [...prevMessages, messageData]);
      setNewMessage(''); 
    }
  };

  const handleJoinChat = () => {
    if (username.trim()) {
      socket.emit('join', username);
      setJoined(true);
    }
  };

  return (
    <div style={styles.chatContainer}>
      <Navbar1 style={{ marginBottom: '20px' }} />
      {!joined ? (
        <div style={styles.joinChat}>
          <h2 style={{ color: '#fff' }}>Enter your name to join the chat:</h2>
          <div style={styles.inputContainer}>
            <input
              type="text"
              style={styles.usernameInput}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button style={styles.joinButton} onClick={handleJoinChat}>
              Join Chat
            </button>
          </div>
        </div>
      ) : (
        <div style={styles.chatRoom}>
          <h2 style={{ color: '#fff' }}>Chat Room</h2>
          <div style={styles.messagesContainer}>
            {messages.map((message, index) =>
              message.system ? (
                <p key={index} style={styles.systemMessage}>
                  {message.text}
                </p>
              ) : (
                <p key={index} style={styles.userMessage}>
                  <strong style={{ color: '#fff' }}>{message.username}:</strong> {message.text}{' '}
                  <span style={styles.timestamp}>{message.timestamp}</span>
                </p>
              )
            )}
          </div>
          <div style={styles.messageInputContainer}>
            <input
              type="text"
              style={styles.messageInput}
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => (e.key === 'Enter' ? handleSendMessage() : null)}
              placeholder="Type a message..."
            />
            <button style={styles.sendButton} onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  chatContainer: {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    backgroundColor: '#000000', // Changed to black
  },
  joinChat: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
  },
  usernameInput: {
    width: 'calc(100% - 100px)',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginRight: '10px',
    backgroundColor: '#fff',
  },
  joinButton: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  chatRoom: {
    marginBottom: '20px',
  },
  messagesContainer: {
    border: '1px solid #ccc',
    padding: '10px',
    height: '300px',
    overflowY: 'auto',
    marginBottom: '10px',
    backgroundColor: '#333', // Dark background for messages
    borderRadius: '4px',
  },
  systemMessage: {
    color: 'gray',
    fontStyle: 'italic',
  },
  userMessage: {
    margin: '5px 0',
    color: '#fff', // White text for user messages
  },
  timestamp: {
    fontSize: 'small',
    color: 'gray',
  },
  messageInputContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  messageInput: {
    width: 'calc(100% - 100px)',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginRight: '10px',
    backgroundColor: '#fff',
  },
  sendButton: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default ChatSocket;
