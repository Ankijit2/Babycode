import React from "react";
import './phone.css'
import Chart from "../chart/Chart";
import Prepareitems from "../Prepareitems/Prepareitems";
import Sidemenucard from "../Sidemenucard/Sidemenucard";
import Childcard from "../Childcard/Childcard";
function Phonecontent() {
  return (
    <div className="bg-gray-100">
      <div className="bg-[#1054d2] p-5">
        <div className="flex justify-between px-4">
          <img src="./profile.png" alt="" className="h-8" />
          <p>Home</p>
          <img src="./instagram.png" alt="" className="h-8" />
        </div>
        <div className="flex mt-5 justify-center">
          <button className=" btn w-20 h-8 text-center rounded-full">IELTS <span className="btnhover">|</span></button>
          <button className=" btn w-20 h-8 text-center rounded-full">PTE <span className="btnhover"> |</span></button>
          <button className=" btn w-20 h-8 text-center rounded-full">TOEFL <span className="btnhover">|</span></button>
        </div>
      </div>
      <div>
        <div className="bg-white flex w-11/12 justify-between mx-auto font-semibold my-6 px-4 py-3 rounded-full shadow-xl"><p>How many students we help</p><button className="bg-red-50 text-red-500 px-3 py-1 rounded-full">Check?</button></div>
      </div>
      <div className="mx-2 shadow-lg">
        <Chart />

        
      </div>
      <div className="mx-2 mt-5">
      <Prepareitems />
      </div>
      <div className="flex sm:gap-5 gap-2 items-center w-11/12 mx-auto my-10 bg-white shadow-lg rounded-full py-2 px-4">
        <img src="./checklist.png" alt="" className="h-10 w-10" />
        <div>
          <h1 className="font-bold">Preparation Mock Test</h1>
          <div className="flex items-center">
            <p className="basis-11/12 sm:text-base text-xs">Get the authentic IELTS exam experience with all the four modules covered!</p>
            <div className="basis-1/12"><img src="./circle.png" alt="" className="h-8 w-8 mt-[-15px]" /></div>
          </div>
        </div>

      </div>
      
      <Sidemenucard/>
      
      <h1 className="mt-4">Quick Actions</h1>
      <div  className="flex justify-between mx-3 my-5">
        <div className="shadow-lg flex gap-3 bg-white rounded-2xl  sm:w-[45%] px-4 items-center py-2 md:text-sm  text-xs">
          <img src="./youtube.png" alt="" className="h-8 w-8"/>
          <h3>App video guide</h3>
        </div>
        <div className="shadow-lg flex gap-3 bg-white rounded-2xl sm:w-[45%]  px-4 items-center py-2 md:text-sm  text-xs">
          <img src="./whatsapp.png" alt="" className="h-8 w-8"/>
          <h3>Help & Support</h3></div>
      </div>
      <Childcard/>
    </div>
  );
}

export default Phonecontent;
