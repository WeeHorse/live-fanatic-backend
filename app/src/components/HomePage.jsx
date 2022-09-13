import Login from "./Login";
import { useState } from "react";

export const LOGIN = "login";
export const SIGN_UP = "signup";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Method to toggle modal
  const [modalType, setModalType] = useState(LOGIN);

  return (
    <>
      {isModalOpen && (
        <Login
          setIsModalOpen={setIsModalOpen}
          setModalType={setModalType}
          modalType={modalType}
        />
      )}
    </>
  );
}
export default HomePage;