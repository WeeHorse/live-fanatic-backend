import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [error, setError] = useState("");

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
      console.log(response);
      // navigate("/");
    } else {
      setError(response.statusText);
    }
    // }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        {error && <span className="login-form__login-error">{error}</span>}
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
        <button className="custom-red-btn">Sign up</button>
        {confirmPasswordError && <span>{confirmPasswordError}</span>}
      </form>
    </div>
  );
}
export default SignUp;
