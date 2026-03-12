import { useState } from "react";

export default function Signup({ setUsername }) {
  const [name, setName] = useState("");

  function handleEnter() {
    localStorage.setItem("username", name);
    setUsername(name);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <div className="bg-white p-6 border border-gray-300 rounded-lg shadow w-80">

        <h1 className="text-xl font-bold mb-4">
          Welcome to CodeLeap network!
        </h1>

        <input
          className="border w-full p-2 mb-4 border border-gray-300 rounded-lg"
          placeholder="Please enter your username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          disabled={!name}
          onClick={handleEnter}
          className={`w-full p-2 text-white ${
            name ? "bg-blue-500" : "bg-gray-400"
          }`}
        >
          ENTER
        </button>

      </div>

    </div>
  );
}