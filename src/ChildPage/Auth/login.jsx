import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogIN = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in with: ${email} / ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div className="flex flex-col relative">
            <label htmlFor="password" className="mb-1 font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-8 text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="flex justify-between items-center text-sm">
            <Link to="/forgot-password" className="text-pink-500 hover:underline">Forgot password?</Link>
            <Link to="/signup" className="text-pink-500 hover:underline">Create account</Link>
          </div>

          <button
            type="submit"
            className="bg-pink-500 text-white p-2 rounded font-bold hover:bg-pink-600 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 flex justify-center gap-4">
          <button className="p-2 rounded bg-gray-200 hover:bg-gray-300 transition">Google</button>
          <button className="p-2 rounded bg-gray-200 hover:bg-gray-300 transition">Facebook</button>
          <button className="p-2 rounded bg-gray-200 hover:bg-gray-300 transition">Gmail</button>
        </div>
      </div>
    </div>
  );
};

export default LogIN;
