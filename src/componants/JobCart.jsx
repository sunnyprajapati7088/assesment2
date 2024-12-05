import { data } from "./data";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";

function JobCart({setFilter,filterjob}) {
//  const [filterjob, setFilter] = useState(data);
  const [searchInput, setSearchInput] = useState("");
    const [locationInput, setLocationInput] = useState("");
    function saveToLocalStorageArray(i, data) {
       const key="jobs"
     try {
    
       let existingData = JSON.parse(localStorage.getItem(key)) || [];

     
       if (!Array.isArray(existingData)) {
         existingData = [];
       }
       existingData.push(data);

       
         localStorage.setItem(key, JSON.stringify(existingData));
         alert("Job saved")
      
     } catch (error) {
       console.error("Error saving array to localStorage:", error);
     }
   }
    useEffect(() => {
    
},[filterjob])
   


  const handleFilter = () => {
    const filteredData = data.filter(
      (job) =>
        job.title.toLowerCase().includes(searchInput.toLowerCase()) &&
        job.location.toLowerCase().includes(locationInput.toLowerCase())
      );
      console.log(filteredData)
    setFilter(filteredData);
  };


  return (
    <div className="w-[90%] h-full mx-auto mt-14 p-4 ">
      <div className="w-[70%] h-14 flex border-[1px] border-gray-500 rounded-md items-center">
        <input
          type="text"
          className="h-[50px] w-[40%]  p-2 border-none border-b border-gray-300 focus:outline-none rounded-md decoration-white border-0"
          placeholder="Search by Job, Title, Position keyword..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <input
          type="text"
          className="h-[50px] w-[40%]  p-2 border-none border-b border-gray-300 focus:outline-none rounded-md"
          placeholder="Search by Location..."
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
        />
        <div className="w-[20%] h-full flex items-center justify-around">
          <i className="fi fi-rs-location-crosshairs ml-4"></i>
          <button
            className="bg-[#F37021] text-white w-[70%] h-[90%] rounded-md"
            onClick={handleFilter}
          >
            Find
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 w-full gap-4 mt-5">
        {filterjob.map((item, i) => (
          <div
            key={i}
            className="flex flex-col p-4 w-[375px]   border-[2px]  rounded-md  justify-around hover:bg-[#FFF6E7]"
          >
            <h1>{item.title}</h1>
            <div className="flex w-[70%] justify-between">
              <h2 className="bg-[#CBEBD2] text-[#2c6739] w-[65px]">
                {item.remote}
              </h2>
              <h2 className="text-gray-500">{item.salary}</h2>
            </div>
            <div className="flex w-full h-[30%] mt-4 items-center justify-between">
              <img
                src={item.companyLogo}
                className="w-8 h-8 border-2 border-gray-400"
              ></img>
              <div className="flex flex-col">
                <h1>{item.companyName}</h1>
                <div className="flex w-[250px]">
                  <img src={item.loc} className="w-5 h-5"></img>
                  <h1 className="text-gray-600">{item.location}</h1>
                </div>
              </div>
              <img
                        src={item.saved}
                        className="w-5 h-5"
                        onClick={() => saveToLocalStorageArray(i, item)}
              ></img>
            </div>
          </div>
        ))}
                
          </div>
        
    </div>
  );
}

export default JobCart;
