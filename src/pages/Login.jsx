

import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex">
      
      {/* LEFT SIDE (Gradient like your image) */}
      <div className="w-1/2 hidden md:flex items-center justify-center 
        bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600">
        
        <h1 className="text-white text-5xl font-bold">
          Chat App
        </h1>
      </div>

      {/* RIGHT SIDE (Login Form) */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">
        
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          
          <h2 className="text-2xl font-bold mb-6 text-center">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-left mt-4 text-gray-600">
            Forgot password?
          </p>
          <div className="text-sm text-right mt-4 text-gray-600 hover:underline hover:cursor-auto" onClick={()=>navigate("/register")}>
           Register me
          </div>
        </div>
      </div>
    </div>
  );
}