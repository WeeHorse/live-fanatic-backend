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
                <ul>
                </ul>
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
            
               
                .navigation ul{
                    display: ${hamburgerOpen ? 'flex' : 'none'};
                    right: 0;
                    bottom: 0;
                    background-color: white;
                    height: 110vh;
                    width: 100vw;
                    margin-bottom: -10vh;
                    position: fixed;
 
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