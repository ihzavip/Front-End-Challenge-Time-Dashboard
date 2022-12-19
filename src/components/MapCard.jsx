import { useEffect, useState } from "react";
import data from "../data.json";
import icon3dots from "../../public/images/icon-ellipsis.svg";

const MapCard = ({ timeFrame }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="min-w-full flex flex-col justify-center items-center bg-green-800 rounded-xl overflow-hidden"
        >
          <div className="img-container h-14">
            <img
              src={`images/icon-${item.title}.svg`.toLowerCase()}
              alt={`${item.title} icon`}
              className="relative left-24 scale-125"
            />
          </div>
          <div className="hover:opacity-80 w-full bg-blue-900 rounded-xl px-5 py-7 z-10 ">
            <div className="flex justify-between items-center lg:mb-4">
              <h3 className="text-xl">{item.title}</h3>
              <img src={icon3dots} alt="more" />
            </div>

            <div className="flex lg:flex-col lg:items-start lg:gap-2 justify-between items-center">
              <h3 className="text-3xl">
                {item.timeframes[timeFrame].current}Hrs
              </h3>

              <h3 className="text-white">
                last weeks - {item.timeframes[timeFrame].previous}Hrs
              </h3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default MapCard;
