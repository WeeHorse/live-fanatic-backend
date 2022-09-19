import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/HomePage";
// import ProfilePage from "./components/profilePage";
import ProfilePage from "./components/ProfilePage";
import SearchPage from "./components/SearchPage";
import TicketsPage from "./components/TicketsPage";
import EventsPage from "./components/EventsPage.jsx";
import Nav from "./components/SiteNavigation/Nav";
import ArtistPage from "./components/ArtistPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/artists/:id" element={<ArtistPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
