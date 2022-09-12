import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/HomePage';
import ProfilePage from './components/profilePage';
import SearchPage from './components/SearchPage';
import TicketsPage from './components/TicketsPage';
import EventPage from './components/EventPage';
import Nav from './components/Nav';
import ArtistPage from './components/ArtistPage'
import SignUp from './components/SignUp';

function App() {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path="/event" element={<EventPage />} />
                    <Route path="/tickets" element={<TicketsPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path='/artist' element={<ArtistPage />} />
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
