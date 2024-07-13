import React from "react";
import { aweicon, footer, } from "../data/Data"; 

const Footer = () => {
  return (
    <div className="bg-black text-white py-8 px-4">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="flex justify-around uppercase  ">
            {footer.map((val, i) => (
              <div key={i}>
                <div className="text-1xl md:text-2xl font-semibold mb-2 hover:text-red-500 cursor-pointer">
                  {val.header}
                </div>
                <div className="flex flex-col">
                  {val.title.map((item, key) => (
                    <span className="mr-5 mb-2 hover:text-red-500 cursor-pointer">
                      {item.subtitle}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-gray-100 rounded-lg p-6 mt-2 shadow-md md:w-1/2">
          <h1 className="text-1xl md:text-2xl  text-black font-semibold mb-4">SINGN UP FOR NEWSLATTER</h1>
          <p className="text-gray-600 mb-4">Don't miss out on exciting promotion and shopping news</p>
          <input type="text" placeholder="Enter your Email" className="w-full md:w-1/2 p-4 border-gray-300 rounded mb-4"/>
          <button className=" w-full md:w-1/3  md:ml-4 bg-black text-white pt-4 pb-4  p-4 rounded-lg hover:bg-red-600 uppercase">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
