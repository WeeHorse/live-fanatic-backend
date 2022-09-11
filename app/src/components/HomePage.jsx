import Logout from './Logout';
import Login from './Login';
import Homebutton from './HomeButton';
import { useState } from 'react';

function HomePage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Method to toggle modal

  return (
    <>
      <Homebutton />
      <Logout />
      <button onClick={() => setIsLoginModalOpen(true)}>Login</button>
      {isLoginModalOpen && <Login setIsLoginModalOpen={setIsLoginModalOpen} />}
    </>
  );
}
export default HomePage;
