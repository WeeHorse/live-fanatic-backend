import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import ArtistPage from './components/ArtistPage'




function App() {
    return <Router>
        <Routes>
            <Route path='/artist' element={<ArtistPage />} />
        </Routes>
    </Router>
}

export default App