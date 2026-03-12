import { useState } from "react";
import Signup from "../src/pages/auth/Signup";
import Feed from "./pages/Feed";

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
  };

  if (!username) {
    return <Signup setUsername={setUsername} />;
  }

  return <Feed username={username} onLogout={handleLogout} />;
}

export default App;