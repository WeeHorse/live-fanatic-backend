import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/HomePage";
import Logout from "./components/Logout";
import Nav from "./components/Nav";
import EventPage from "./components/EventPage";
import Card from "./components/Card";

function App() {
  return (
    <>
      <BrowserRouter>
      	<Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path="/event" element={<EventPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
