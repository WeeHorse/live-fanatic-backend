import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

function Logout() {
  const { logout } = useContext(GlobalContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <>
      <button className="custom-red-btn" id="sign-out" onClick={handleLogout}>
        Sign out
      </button>
    </>
  );
}

export default Logout;
