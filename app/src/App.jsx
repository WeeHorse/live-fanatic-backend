import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from './components/Card';
import EventPage from './components/EventPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/event' element={<EventPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
