import { React, useState } from "react";
import { Link } from "react-router-dom";

import Hamburger from "./Hamburger";
import homeSvg from "../assets/home.svg";
import eventSvg from "../assets/events.svg";
import ticketSvg from "../assets/ticket.svg";
import profileSvg from "../assets/profile.svg";
import Login from "./Login";

export const LOGIN = "login";
export const SIGN_UP = "signup";

function Nav() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };
    const [isModalOpen, setIsModalOpen] = useState(false); // Method to toggle modal
    const [modalType, setModalType] = useState(LOGIN);

    return (
        <>
            <div>
                {isModalOpen && (
                    <Login
                        setIsModalOpen={setIsModalOpen}
                        setModalType={setModalType}
                        modalType={modalType}
                    />
                )}
                <div className="navigation">

                    <div className="insideHamburger">
                        <div
                            className="hamburgerbutton"
                            id="ham-home"
                            onClick={toggleHamburger}
                        >
                            <Link to="/" id="home-button">
                                <img src={homeSvg} alt="home" />
                            </Link>
                        </div>
                        <div className="hamburgerbutton">
                            <Link to="/event" onClick={toggleHamburger}>
                                <img src={eventSvg} alt="eventbutton" />
                                <p>Events</p>
                            </Link>
                        </div>

                        <div className="hamburgerbutton">
                            <Link to="/ticket" onClick={toggleHamburger}>
                                <img src={ticketSvg} alt="ticketbutton" />
                                <p>Tickets</p>
                            </Link>
                        </div>
                        <div className="hamburgerbutton" id="profile">
                            <Link to="/profile" onClick={toggleHamburger}>
                                <img src={profileSvg} alt="profile button" />
                                <p>Profile</p>
                            </Link>
                        </div>
                        <div id="modal">

                            <button
                                onClick={() => {
                                    setIsModalOpen(true);
                                    setModalType(LOGIN);
                                    setHamburgerOpen(false);
                                }}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => {
                                    setIsModalOpen(true);
                                    setModalType(SIGN_UP);
                                    setHamburgerOpen(false);
                                }}
                            >
                                Sign up
                            </button>
                        </div>
                        <div className="hamburgerbutton" id="searchbar">
                            <Link to="/search" onClick={toggleHamburger}>
                                Search...
                            </Link>
                        </div>
                    </div>
                    <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerOpen} />
                    </div>
                </div>
                <style jsx="true">{`
          .navigation {
            display: flex;
            position: absolute;
            bottom: 10px;
            right: 25px;
            justify-content: flex-end;
            width: 100%;
            height: 50px;
            text-align: center;
          }

          .navigation ul li {
            list-style-type: none;
            padding-right: 10px;
          }
          .hamburger {
            position: fixed;
            bottom: 0;
            right: 0;
            margin-right: 4vw;
            margin-bottom: 4vh;
            z-index: 6;
          }

          .insideHamburger {
            display: ${hamburgerOpen ? "grid" : "none"};
            right: 0;
            bottom: 0;
            background-color: #fafafa;
            height: 70vh;
            width: 60vw;

            position: fixed;
            grid-template-rows: 2fr 2fr 2fr 2fr 2fr 1fr;
          }

          button {
            margin: 8px;
          }

          @media (min-width: 767px) {
            .hamburger {
              display: none;
              z-index: 6;
            }
          }
        `}</style>
            </div>
        </>
    );
}

export default Nav;
