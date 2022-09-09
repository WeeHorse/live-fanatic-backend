import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/HomePage';
import Logout from './components/Logout';
import Nav from './components/Nav'

function App() {
    return (
        <>
            <Nav />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
