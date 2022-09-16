import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/HomePage";
import ProfilePage from "./components/profilePage";
import SearchPage from "./components/SearchPage";
import TicketsPage from "./components/TicketsPage";
import EventsPage from "./components/EventsPage.jsx";
import Nav from "./components/Nav";
import ArtistPage from "./components/ArtistPage";
import Event from "./components/Event.jsx"
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/event" element={<EventsPage />} />
          <Route path="/event/:id" element={<Event/>}/>
          <Route path="/ticket" element={<TicketsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/artist/:id" element={<ArtistPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
