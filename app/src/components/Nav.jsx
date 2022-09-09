import { React, useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'

import Hamburger from './Hamburger';
import ProfilePage from './ProfilePage';
import EventPage from './EventPage';
import TicketsPage from './TicketsPage';
import SearchBar from "./SearchBar";

function Nav() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return <Router>
        <div>
            <div className="navigation">
                <div className="insideHamburger">
                    <div className="hamburgerbutton">
                        <Link to="/event-page" onClick={toggleHamburger}>EventPage</Link>
                    </div>

                    <div className="hamburgerbutton">
                        <Link to="/tickets-page" onClick={toggleHamburger}>TicketsPage</Link>
                    </div>
                    <div className="hamburgerbutton" id="profile">
                        <Link to="/profile-page" onClick={toggleHamburger}>ProfilePage</Link>
                    </div>
                    <div></div>
                    <div></div>
                    <div className="hamburgerbutton" id="searchbar">
                        <div className="Search">
                            <SearchBar />
                        </div>
                    </div>

                </div>
                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen} />
                </div>
            </div>
            <style jsx="true">{`
                .navigation{
                    display: flex;
                    position: absolute;
                    bottom: 10px;
                    right: 25px;
                    justify-content: flex-end;
                    width: 100%;
                    height: 50px;
                    text-align: center;
                }
                
                
                .navigation ul li{
                    list-style-type: none;
                    padding-right: 10px;
                }
                .hamburger{
                    display:fixed;
                    padding-top: 10px;
                    margin-left: 10px;
                    z-index: 6;
                }
            
                .insideHamburger{
                        display: ${hamburgerOpen ? 'grid' : 'none'};
                        right: 0;
                        bottom: 0;
                        background-color: #fafafa;
                        height: 100vh;
                        width: 80vw;
                              
                        position: fixed;
                        grid-template-rows: 2fr 2fr 2fr 2fr 2fr 1fr;
                        }
              
                @media (min-width: 767px){
                    .hamburger{
                        display: none;
                        z-index: 6;
                    } 
                  
                }
                
            `}</style>
        </div>

        <Routes>
            <Route path="/event-page" element={<EventPage />} />
            <Route path="/tickets-page" element={<TicketsPage />} />
            <Route path="/profile-page" element={<ProfilePage />} />
        </Routes>
    </Router>
}

export default Nav