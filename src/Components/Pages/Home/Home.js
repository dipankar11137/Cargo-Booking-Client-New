import React from "react";
import Name from "./Name";

const Home = () => {
  return (
    <div>
      <Name />
      <div className="grid grid-cols-2   ">
        <div className="flex justify-center p-4 ">
          <h1
            style={{ boxShadow: "0px 5px 10px blue" }}
            className="text-8xl uppercase text-center pt-40 font-extrabold items-center rounded-xl"
          >
            Welcome to our website
          </h1>
        </div>
        <div className="p-4">
          <img
            style={{ boxShadow: "0px 5px 10px blue", height: "600px" }}
            className="rounded-xl"
            // style={{ height: "600px" }}
            src="https://img.freepik.com/premium-photo/transportation-logistics-container-cargo-ship-cargo-plane-3d-rendering-illustration_37416-487.jpg?w=2000"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
