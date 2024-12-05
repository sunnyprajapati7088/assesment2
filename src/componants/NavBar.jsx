import React, { useEffect, useState } from "react";
import { data } from "./data";
function NavBar({ setFilter, filterjob,check,setCheck }) {
 
    
    function getDataFromLocalStorageArray() {
         console.log("hii");
        const key = "jobs";
        setCheck((prev) => !prev);
        
      try {
      
          const dataa = JSON.parse(localStorage.getItem(key)) || [];
          if (check) {
            setFilter(data);
          } else {
               setFilter(dataa);
               console.log(data, filterjob);
             
        }
        
     

      
    } catch (error) {
      console.error("Error data from localStorage:", error);
     
    }
    }
    
  return (
    <div className="w-full h-[70px] border-b-[1px] border-gray-500 ">
      <div className="w-[90%] h-full mx-auto flex justify-between">
        <div className="w-[25%] flex items-center">
          <img
            className="w-14 h-12"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/work-bag-design-template-d4cea201da5914deb3780db170503ce7_screen.jpg?ts=1694041236"
          ></img>
          <h1 className="text-2xl">Explorin Solutions</h1>
        </div>
        <div className="w-[30%] flex justify-around items-center">
          {check ? (
            <img
              onClick={getDataFromLocalStorageArray}
              className="w-[30px] h-[30px]"
              src="https://static.vecteezy.com/system/resources/previews/000/554/154/original/check-mark-vector-icon.jpg"
            ></img>
          ) : (
            <img
              onClick={getDataFromLocalStorageArray}
              className="w-[30px] h-[30px]"
              src="https://cdn0.iconfinder.com/data/icons/tools-165/24/square-1024.png"
            ></img>
          )}

          <p className=" text-xl text-gray-400">My Saved Jobs Only</p>
          <img
            className="w-12 h-12 rounded-3xl"
            src="https://cdn5.vectorstock.com/i/1000x1000/81/54/new-notification-icon-vector-19838154.jpg"
          ></img>
          <img
            className="w-12 h-12 rounded-3xl"
            src="https://i.pinimg.com/originals/7d/ca/be/7dcabe92370fff0c6489aba65af5dab2.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
