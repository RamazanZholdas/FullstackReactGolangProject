import React from 'react';

function Login() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-xl p-6 w-80">
          <h1 className="text-3xl font-bold mb-2">Login</h1>
          <p className="text-gray-500 mb-6">Please login to your account</p>
          <form className="flex flex-col w-full">
            <label htmlFor="email" className="mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="border border-gray-300 p-2 rounded mb-4"
            />
            <label htmlFor="password" className="mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="border border-gray-300 p-2 rounded mb-4"
            />
            <button
              type="submit"
              className="bg-green-400 text-white font-semibold py-2 px-4 rounded hover:shadow-lg hover:shadow-green-400">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
