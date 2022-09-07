import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import ProfilePage from './components/profilePage'


function App() {
    return <Router>
        <Routes>
            <Route path='/profile' element={<ProfilePage />} />
        </Routes>
    </Router>
}

export default App
