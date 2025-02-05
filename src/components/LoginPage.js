import React, { useState, useEffect } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // Check localStorage for login state on component mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      setLoggedIn(true);
    }
  }, []);

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login (no actual authentication)
    setLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true"); // Persist login state
  };

  // Handle logout
  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); // Clear login state
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {!loggedIn ? (
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-md w-96"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <iframe
            src="https://apps.powerapps.com/play/e/default-48e4597f-f6ce-4925-94d6-17e3be3f5f5a/a/e79654d8-b37f-4f7c-adf6-afa026ed0fe2?tenantId=48e4597f-f6ce-4925-94d6-17e3be3f5f5a&sourcetime=1738761679624&source=portal"
            title="JoinerEnrolmentApp"
            className="w-[80%] h-[80vh] border rounded-lg shadow-lg"
          />
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;