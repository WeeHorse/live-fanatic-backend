import Logout from "./Logout";
import Login from "./Login";
import SignUp from "./SignUp";
import { useState } from "react";
import { Link } from "react-router-dom";

export const LOGIN = "login";
export const SIGN_UP = "signup";

function HomePage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Method to toggle modal
  const [defaultAccountState, setDefaultAccountState] = useState(LOGIN);

  return (
    <>
      <button
        onClick={() => {
          setIsLoginOpen(true);
          setDefaultAccountState(LOGIN);
        }}
      >
        Login
      </button>
      {isLoginOpen && (
        <Login
          setIsLoginOpen={setIsLoginOpen}
          defaultAccountState={defaultAccountState}
        />
      )}

      {/* <button onClick={() => setIsSignUpOpen(true)}>Sign up</button> */}
      {/* {isSignUpOpen && <SignUp setIsSignUpOpen={setIsSignUpOpen} />} */}

      <button
        onClick={() => {
          setIsLoginOpen(true);
          setDefaultAccountState(SIGN_UP);
        }}
      >
        Sign up
      </button>
    </>
  );
}
export default HomePage;
