import { useEffect } from "react";
import { useState } from "react";

/*To use this component in a parent comp:
Write in function:
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Method to toggle modal

Write in HTML:
    <button onClick={() => setIsLoginModalOpen(true)}></button>
    {isLoginModalOpen && <Login setIsLoginModalOpen={setIsLoginModalOpen} />}
*/

function Login({ setIsLoginModalOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setTimeout(() => {
      document.querySelector("#login input[type='text']").focus();
    }, 1);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hej");
    const requestOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    };
    let response = await fetch("/data/login", requestOptions);
    if (response.ok) {
      response = await response.json();
      setIsLoggedIn(true);
      setIsLoginModalOpen(false);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form" id="login">
        {error && <span className="login-form__login-error">{error}</span>}
        <button
          className="login-form__close-btn"
          onClick={() => setIsLoginModalOpen(false)}
        >
          x
        </button>
        <label>Email</label>
        <input
          className="custom-input"
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="custom-input"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="custom-red-btn">Login</button>
        <span className="login-form__sign-up">
          Not a member? <a href="#">Sign up</a>
        </span>
      </form>
    </div>
  );
}

export default Login;
