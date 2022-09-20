import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    let response = await fetch("/data/login", { method: "DELETE" });
    if (response.ok) {
      response = await response.json();
      navigate("/");
    }
  };

  return (
    <>
      <button className="custom-button" id="sign-out" onClick={handleLogout}>
        Sign out
      </button>
    </>
  );
}

export default Logout;
