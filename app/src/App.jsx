import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/HomePage';
// import ProfilePage from './components/profilePage';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <>
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
