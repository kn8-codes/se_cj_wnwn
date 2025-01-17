import "./Main.css";
import React from "react";
import SideBar from "../SideBar/SideBar";
import Map from "../Map/Map";
import Header from "../Header/Header";

const Main = () => {
  return (
    <>
      <section className="main">
        <Header />
        <div className="page_content">
          <SideBar />
          <Map />
        </div>
      </section>
    </>
  );
};

export default Main;
