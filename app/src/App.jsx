import { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import ProfilePage from './components/ProfilePage'
import Login from './components/Login'


function App() {

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);



    return (<>
        <button onClick={() => setIsLoginModalOpen(true)}>DENNA HÄR!</button>
        {isLoginModalOpen && <Login setIsLoginModalOpen={setIsLoginModalOpen} />}
        <Router>
            <Routes>
                <Route path='/profile' element={<ProfilePage />} />
            </Routes>
        </Router>
    </>
    )
}

export default App
