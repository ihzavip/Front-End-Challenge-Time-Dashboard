import React, { useState } from "react";
import avatar from "../public/images/image-jeremy.png";
import MapCard from "./components/MapCard";
function App() {
  const [clickedId, setClickedId] = useState("daily");

  const clickGetId = (event) => {
    setClickedId(event.target.id);
  };

  const timeFrame = clickedId;

  return (
    <div className="grid lg:grid-cols-4 gap-5 lg:place-content-center ">
      <div className="profile-card row-span-2 min-w-full flex flex-col justify-center items-center lg:justify-start bg-blue-900 rounded-xl">
        <div className="flex lg:flex-col lg:pl-5 justify-start gap-5 bg-blue-600  min-w-full rounded-2xl py-7">
          <img src={avatar} className="w-20 ml-8" alt="avatar" />
          <div className="flex flex-col justify-center items-start">
            <p className="text-white/60">Report for</p>
            <p className="text-2xl">Jeremy Robson</p>
          </div>
        </div>
        <div className="flex lg:flex-col lg:pl-5 lg:items-start min-w-full  justify-evenly py-5 items-center gap-6">
          <a
            onClick={clickGetId}
            id="daily"
            className="text-white cursor-pointer"
          >
            Daily
          </a>
          <a
            onClick={clickGetId}
            id="weekly"
            className="text-white cursor-pointer"
          >
            Weekly
          </a>
          <a
            onClick={clickGetId}
            id="monthly"
            className="text-white cursor-pointer"
          >
            Monthly
          </a>
        </div>
      </div>

      {/* <CardTime /> */}
      <MapCard timeFrame={timeFrame} />
    </div>
  );
}

export default App;
