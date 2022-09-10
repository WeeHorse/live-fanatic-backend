import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/HomePage";
import Logout from "./components/Logout";
import Nav from "./components/Nav";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/event" element={<EventPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
