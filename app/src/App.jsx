import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/HomePage";
import ProfilePage from "./components/profilePage";
import SearchPage from "./components/SearchPage";
import TicketsPage from "./components/TicketsPage";
import EventPage from "./components/EventPage";
import Nav from "./components/Nav";
import SomeBuyPage from "./components/SomeBuyPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/ticket" element={<TicketsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/some-buy-page" element={<SomeBuyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
