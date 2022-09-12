import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/HomePage';
// import ProfilePage from './components/profilePage';
import ProfilePage from './components/ProfilePage';
import Nav from './components/Nav'

function App() {
  return (
    <>
    <Nav/>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
