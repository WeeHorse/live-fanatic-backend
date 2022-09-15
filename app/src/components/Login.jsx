import { useEffect } from "react";
import { useState } from "react";
import { LOGIN, SIGN_UP } from "./Nav";
import SignUp from "./SignUp";

/*To use this component in a parent comp:
Write in function:
    const [isLoginModalOpen, setIsModalOpen] = useState(false); // Method to toggle modal

Write in HTML:
    <button onClick={() => setIsModalOpen(true)}></button>
    {isLoginModalOpen && <Login setIsModalOpen={setIsModalOpen} />}
*/

function Login({ setIsModalOpen, modalType, setModalType }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [viewTab, setViewTab] = useState(modalType);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector("#login input[type='text']").focus();
    }, 1);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    };
    let response = await fetch("/data/login", requestOptions);
    if (response.ok) {
      response = await response.json();
      setIsModalOpen(false);
    } else {
      setError("Invalid username or password");
    }
  };

  if (modalType === LOGIN) {
    return (
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form" id="login">
          {error && <span className="login-form__login-error">{error}</span>}
          <button
            className="login-form__close-btn"
            onClick={() => setIsModalOpen(false)}
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
            Not a member?
            <button onClick={() => setModalType(SIGN_UP)}>Sign up</button>
          </span>
        </form>
      </div>
    );
  }
  return <SignUp setIsModalOpen={setIsModalOpen} setModalType={setModalType} />;
}

export default Login;