import React, { useState, useEffect } from 'react';

import databaseOBJ from './databse';
import "./app.css"

import Sidebar from './components/Sidebar';
import SearchResults from './components/SearchResults';
function App() {

  const [daataa, setData] = useState(databaseOBJ.data)
  const [from, setFrom] = useState("Chongqing Jiangbei International")
  const [to, setTo] = useState("Wenzhou")
  const [loader, setLoader] = useState(false)
  const [sliderValue, setSliderValue] = useState(500)

  let filtered = []
  let departureArray = []
  let arrivalArray = []

  //filtering the departure array to remove duplicate airports.
  databaseOBJ.data.map((item) => {
    if (!departureArray.includes(item.departure.airport)) {
      departureArray.push(item.departure.airport)
    }
  })

  //filtering the arrival array to remove duplicate airports.
  databaseOBJ.data.map((item) => {
    if (!arrivalArray.includes(item.arrival.airport)) {
      arrivalArray.push(item.arrival.airport)
    }
  })
  //look for js hash map to increase optimisation.

  function search() {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 1000);

    if (!from || !to) {
      setData(databaseOBJ.data);
      return;
    }


    filtered = databaseOBJ.data.filter((item) => item.departure.airport === from && item.arrival.airport === to);
    setData(filtered);
  }

  function sliderChange(e) {
    setSliderValue(e.target.value);
  }

  useEffect(() => {
    let sliderFiltered = daataa.filter((item) => item.price <= sliderValue);
      setData(sliderFiltered);
  }, [sliderValue])

  return (
    <>
      <h1>Flight search engine</h1>
      <div className="appWrapper">
        <Sidebar setFrom={setFrom} setTo={setTo} departureArray={departureArray} arrivalArray={arrivalArray} search={search} sliderChange={sliderChange} sliderValue={sliderValue} />
        
        <SearchResults daataa={daataa} loader={loader} />
      </div>
    </>
  );
}

export default App;