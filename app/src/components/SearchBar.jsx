import React, { useState } from "react";
import "../stylesheets/searchBar.scss";
import closeSvg from '../assets/close.svg'
import SearchSvg from '../assets/search.svg'
import useFetch from "../hooks/useFetch";
import { Link } from 'react-router-dom';



function SearchBar({ placeholder }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const { error, isPending, data: artists } = useFetch("/data/artists");


    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = artists.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
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

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}

                />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <img src={SearchSvg} alt="home" />
                    ) : (
                        <img src={closeSvg} alt="home" />
                    )}
                </div>
            </div>
            {filteredData.length != 0 && (
                <div className="dataResult" key={artists.id}>
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <div className="dataItem" href={value.link} target="_blank">
                                <Link to={`/artist/${value.id}`}>{value.name}</Link>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchBar;