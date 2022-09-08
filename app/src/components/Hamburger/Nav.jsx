import Hamburger from './Hamburger'
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
                    <div className="hamburgerbutton">Events</div>

                    <div className="hamburgerbutton">Tickets</div>
                    <div className="hamburgerbutton" id="profile">
                    </div>
                    <div></div>
                    <div></div>
                    <div className="hamburgerbutton" id="searchbar">Searchbar</div>

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
    )
}

export default Nav