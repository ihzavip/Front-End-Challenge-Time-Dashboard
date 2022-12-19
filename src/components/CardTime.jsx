import React from "react";
import icon3dots from "../../public/images/icon-ellipsis.svg";
import data from "../data.json";

const CardTime = () => {
  return (
    <div className="first-card min-w-full flex flex-col justify-center items-center bg-orange-700 rounded-xl overflow-hidden">
      <div className="img-container h-14">
        <img
          src={`../../public/images/icon-${data[0].title}.svg`.toLowerCase()}
          alt={`${data[0].title} icon`}
          className="relative left-24 scale-125"
        />
      </div>
      <div className="w-full bg-blue-900 rounded-xl px-5 py-7 z-10 ">
        <div className="flex justify-between items-center">
          <h3 className="text-xl">{data[0].title}</h3>
          <img src={icon3dots} alt="more" />
        </div>

        <div className="flex justify-between items-center">
          <h3 className="text-3xl">{data[0].timeframes.weekly.current} Hrs</h3>

          <h3 className="text-white">
            last weeks - {data[0].timeframes.weekly.previous}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CardTime;
