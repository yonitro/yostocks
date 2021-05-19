import React from "react";
import { GlobalProvider } from "../../context/GlobalContext";
import TopBar from "../widgets/TopBar";


const LandingPage = () => {
  return (
    <>
      <GlobalProvider>
        <TopBar />      
      </GlobalProvider>
    </>
  );
};

export default LandingPage;
