import { useState, useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";
import { LOGIN } from "./SiteNavigation/Nav";
import { useNavigate } from "react-router-dom";

function SignUp({ setIsModalOpen, setModalType }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [error, setError] = useState("");
  const containerRef = useRef(null);

  useClickOutside(containerRef, () => setIsModalOpen(false));

  const navigate = useNavigate();

  const handlePasswordValidation = () => {
    setConfirmPasswordError("Password do not match");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== verifyPassword) {
      handlePasswordValidation();
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    };
    let response = await fetch("/data/users", requestOptions);
    if (response.ok) {
      response = await response.json();
      navigate("/");
    } else {
      setError(response.statusText);
    }
    // }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form" ref={containerRef}>
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
        <label>Verify password</label>
        <input
          className="custom-input"
          type="password"
          required
          value={verifyPassword}
          onChange={(e) => setVerifyPassword(e.target.value)}
        />
        <button className="custom-button">Sign up</button>
        <span className="login-form__sign-up">
          Already a member?
          <button onClick={() => setModalType(LOGIN)}>Sign in</button>
        </span>
        {confirmPasswordError && <span>{confirmPasswordError}</span>}
      </form>
    </div>
  );
}
export default SignUp;
