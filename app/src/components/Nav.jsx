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
import SearchPage from './SearchPage';
import Homebutton from './HomeButton';
import HomeSvg from '../assets/home.svg'
import EventSvg from '../assets/events.svg'
import TicketSvg from '../assets/ticket.svg'
import ProfileSvg from '../assets/profile.svg'




function Nav() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return <>

        <div>
            <div className="navigation">
                <div className="insideHamburger">
                    <div className="hamburgerbutton" id='ham-home' onClick={toggleHamburger}>
                        <img src={HomeSvg} alt="homebutton" />
                        <Homebutton />
                    </div>
                    <div className="hamburgerbutton">
                        <img src={EventSvg} alt="eventbutton" />
                        <Link to="/event-page" onClick={toggleHamburger}>EventPage</Link>
                    </div>

                    <div className="hamburgerbutton">
                        <img src={TicketSvg} alt="ticketbutton" />
                        <Link to="/tickets-page" onClick={toggleHamburger}>TicketsPage</Link>
                    </div>
                    <div className="hamburgerbutton" id="profile">
                        <img src={ProfileSvg} alt="profile button" />
                        <Link to="/profile-page" onClick={toggleHamburger}>ProfilePage</Link>
                    </div>
                    <div></div>
                    <div className="hamburgerbutton" id="searchbar">
                        <Link to="/search-page" onClick={toggleHamburger}>Search...</Link>
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
                    position:fixed;
                    bottom: 0;
                    margin-right: 4vw;
                    margin-bottom: 4vh;
                    z-index: 6;
                }
            
                .insideHamburger{
                        display: ${hamburgerOpen ? 'grid' : 'none'};
                        right: 0;
                        bottom: 0;
                        background-color: #fafafa;
                        height: 60vh;
                        width: 40vw;
                              
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
    </>

}

export default Nav