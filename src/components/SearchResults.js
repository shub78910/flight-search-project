import React from "react";
import "../app.css";

function SearchResults({ loader, daataa }) {
    return (
        <div>
            <div className="searchResults">
                {loader ? (
                    <h1>Loading...</h1>
                ) : daataa.length > 0 ? (
                    daataa.map((item) => {
                        return (
                            <div
                                className="resultWrapper"
                                key={`${item.flight.number}-${item.flight.iata}-${item.flight.icao}`}
                            >
                                <small className="status">
                                    {item.flight_status}
                                </small>
                                <h2>Flight number: {item.flight.number}</h2>
                                <h2>Rs. {item.price}</h2>
                                <h3>Departure date: {item.flight_date}</h3>
                                <div className="from_to_details">
                                    <h3>{item.departure.airport}</h3>
                                    <h1>&#9992;</h1>
                                    <h3>{item.arrival.airport}</h3>
                                </div>
                                <h3>Airport: {item.departure.airport} </h3>
                                <button>Book Flight</button>
                            </div>
                        );
                    })
                ) : (
                    <h3>No matches found</h3>
                )}
            </div>
        </div>
    );
}

export default SearchResults;
