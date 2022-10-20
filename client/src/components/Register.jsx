import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    await fetch('http://localhost:8000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-xl p-6 w-80">
          <h1 className="text-3xl font-bold mb-2">Register</h1>
          <p className="text-gray-500 mb-6">Please register your account</p>
          <form className="flex flex-col w-full" onSubmit={submit}>
            <label htmlFor="email" className="mb-1">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="border border-gray-300 p-2 rounded mb-4"
            />
            <label htmlFor="name" className="mb-1">
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              id="name"
              placeholder="Username"
              className="border border-gray-300 p-2 rounded mb-4"
            />
            <label htmlFor="password" className="mb-1">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="border border-gray-300 p-2 rounded mb-4"
            />
            <button
              type="submit"
              className="bg-green-400 text-white font-semibold py-2 px-4 rounded hover:shadow-lg hover:shadow-green-400">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
