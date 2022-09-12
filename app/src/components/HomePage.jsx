import Logout from "./Logout";
import Login from "./Login";
import SignUp from "./SignUp";
import { useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Method to toggle modal

  return (
    <>
      <button onClick={() => setIsLoginModalOpen(true)}>Login</button>
      {isLoginModalOpen && <Login setIsLoginModalOpen={setIsLoginModalOpen} />}

      <Link to="/signup">Sign up</Link>
    </>
  );
}
export default HomePage;
