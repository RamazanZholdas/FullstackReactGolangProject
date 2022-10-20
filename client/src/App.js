import React from 'react';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:8000/user', {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      const content = await response.json();
      if (content.name !== undefined) {
        setName(content.name);
      } else {
        setName('');
      }
    })();
  });
  return (
    <div>
      <Navbar name={name} setName={setName} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog name={name} />} />
        <Route path="/login" element={<Login setName={setName} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
