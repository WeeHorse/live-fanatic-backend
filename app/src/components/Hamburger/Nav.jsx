import Hamburger from "./Hamburger"
import { useState } from 'react'

function Nav() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div>
            <div className="navigation">
                <div className="insideHamburger">

                    <div id="events">
                        <span>Events</span>
                    </div>
                    <div id="tickets">Tickets</div>
                    <div id="bottomBar">
                        <div className="profile"><span>Profile</span></div>
                        <div className="searchbar">Searchbar</div>
                    </div>

                </div>
                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen} />
                </div>
            </div>


            <style jsx>{`
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
                                height: 110vh;
                                width: 100vw;
                                margin-bottom: -10vh;
                                position: fixed;
                                grid-template-rows: 3fr 3fr 1fr;
                        }
              
                @media (min-width: 767px){

                    .hamburger{
                        display: none;
                        z-index: 6;
                    } 
                  
                }
                
               
                
            `}</style>
        </div>
    )
}

export default Nav