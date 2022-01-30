import React from "react";
import LeftPanel from "../components/layout/components/LeftPanel/leftPanel";
import MiddlePanel from "../components/layout/components/MiddlePanel/MiddlePanel";
import RightPanel from "../components/layout/components/rightPanel/RightPanel";
import LayoutContainer from "../components/layout/LayoutContainer";

const Home = () => {
  return (
    <LayoutContainer>
      {/* Left */}
      <LeftPanel />
      {/* /Left */}
      {/* Middle */}
      <MiddlePanel />
      {/* /Middle */}
      {/* Right */}
      <RightPanel />
      {/* /Right */}
    </LayoutContainer>
  );
};

export default Home;
