import Logout from './Logout';
import Login from './Login';
import Homebutton from './HomeButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Method to toggle modal

  return (
    <>
      <Homebutton />
      <Logout />
      <button onClick={() => setIsLoginModalOpen(true)}>Login</button>
      {isLoginModalOpen && <Login setIsLoginModalOpen={setIsLoginModalOpen} />}
      <Link to="/profile"> Profile page</Link>
    </>
  );
}
export default HomePage;
