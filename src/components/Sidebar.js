import React from "react";
import "../app.css";

function Sidebar({
    setFrom,
    setTo,
    departureArray,
    arrivalArray,
    search,
    sliderChange,
    sliderValue,
    searchClickHandler,
}) {
    return (
        <div>
            <div className="sidebar">
                <label>From:</label>
                <select onChange={(e) => setFrom(e.target.value)}>
                    {departureArray.map((item) => {
                        return <option key={item}>{item}</option>;
                    })}
                </select>
                <br />

                <label>To:</label>
                <select onChange={(e) => setTo(e.target.value)}>
                    {arrivalArray.map((item) => {
                        return <option key={item}>{item}</option>;
                    })}
                </select>
                <br />

                <label>Departure date:</label>
                <input type="date" />

                <label>Return date:</label>
                <input type="date" />
                <button className="searchBtn" onClick={searchClickHandler}>
                    Search Flights
                </button>

                <input
                    type="range"
                    id="points"
                    name="points"
                    min="500"
                    max="20000"
                    onChange={sliderChange}
                />

                <div className="sliderValues">
                    <small>{sliderValue}</small>
                    <small>20000</small>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
