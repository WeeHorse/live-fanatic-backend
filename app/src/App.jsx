import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventPage from "./components/EventPage";
import Homepage from "./components/HomePage";
import Logout from "./components/Logout";
import Nav from "./components/Nav";
import ProfilePage from "./components/ProfilePage";
import SignUpPage from "./components/SignUpPage";
import TicketsPage from "./components/TicketsPage";

function App() {
  return (
    <>
      {/* <Nav /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route path="/event-page" element={<EventPage />} />
          <Route path="/tickets-page" element={<TicketsPage />} />
          <Route path="/profile-page" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
