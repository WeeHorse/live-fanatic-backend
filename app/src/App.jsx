import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/HomePage";
// import ProfilePage from "./components/profilePage";
import ProfilePage from "./components/ProfilePage";
import SearchPage from "./components/SearchPage";
import TicketsPage from "./components/TicketsPage";
import EventPage from "./components/EventPage";
import Nav from "./components/Nav";
import ArtistPage from "./components/ArtistPage";

import EventDetails from "./components/EventDetails";
import { EventContext } from "./context/EventContext";
import OrderConfirmation from "./components/OrderConfirmation";

function App() {
  return (
    <EventContext>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/event" element={<EventPage />} />
          <Route exact path="/event/:id" element={<EventDetails />} />
          <Route path="/ticket" element={<TicketsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/artist/:id" element={<ArtistPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </BrowserRouter>
    </EventContext>
  );
}

export default App;
