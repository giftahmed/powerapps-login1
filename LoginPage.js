import React, { useState } from "react";

const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {!loggedIn ? (
        <div className="p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Login</h2>
          <input className="w-full p-2 border mb-2" type="email" placeholder="Email" />
          <input className="w-full p-2 border mb-4" type="password" placeholder="Password" />
          <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </div>
      ) : (
        <iframe
          src="https://apps.powerapps.com/play/YOUR_APP_ID"
          className="w-4/5 h-screen border"
          title="PowerApps"
        />
      )}
    </div>
  );
};

export default LoginPage;
