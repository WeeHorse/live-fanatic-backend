import React, { useState } from "react";
import "../stylesheets/searchBar.scss";
import closeSvg from '../assets/close.svg'
import searchSvg from '../assets/search.svg'
import useFetch from "../hooks/useFetch";
import { Link } from 'react-router-dom';
import ArtistEvents from "./ArtistEvents";



function SearchBar({ placeholder }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const { error, isPending, data: stuff } = useFetch("/data/concert_details");

    const [searchToggle, setSearchToggle] = useState(false);
    const toggleSearchFalse = () => {
        setSearchToggle(false);
    };
    const toggleSearchTrue = () => {
        setSearchToggle(true);
    };


    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = stuff.filter((artist) => {
            if (searchToggle == false) {
                return artist.artist_name.toLowerCase().includes(searchWord.toLowerCase())
            } else {
                return artist.venue_name.toLowerCase().includes(searchWord.toLowerCase())
            }
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return <>

        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}

                />
                <div className="searchIcon">
                    {wordEntered.length > 0 ? (
                        <img src={closeSvg} alt="closeIcon" onClick={clearInput} />
                    ) : (
                        <img src={searchSvg} alt="searchIcon" />
                    )}
                </div>
            </div>
            {filteredData.length != 0 && (
                <div className="dataResult" key={stuff.artist_id}>
                    {filteredData.slice(0, 15).map((artist, key) => {
                        return (
                            <div className="dataItem">
                                <Link to={`/artist/${artist.artist_id}`}>
                                    {searchToggle == false && (
                                        artist.artist_name
                                    )
                                    }
                                    {searchToggle == true && (
                                        artist.venue_name
                                    )}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            )}
            <div className="toggleBox">
                <div className="toggleSearchA" onClick={toggleSearchFalse}>PRESS ME FOR ARTISTS</div>
                <div className="toggleSearchV" onClick={toggleSearchTrue}>PRESS ME FOR VENUES</div>
            </div>
            <style jsx="true">{`
         .toggleSearchV {
            color: ${searchToggle ? "gray" : "black"};
            }


         .toggleSearchA {
           color: ${searchToggle ? "black" : "gray"}
            }
       
         `}
            </style>
        </div>

    </>
}

export default SearchBar;