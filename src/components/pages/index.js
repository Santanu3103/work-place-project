import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Section2 from "./Section2/Section2";
import Section3 from "./section3/Section.js";
import BannerImage from "./Bannersection";
import Headers from "./Section1/index.js";
function LandingPage() {
  return (
    <div>
      <div>
        <NavBar />
        <Headers />
      </div>
      <div >
        <Section2 />
      </div>

      <Section3 />

      <div>
        <BannerImage />
      </div>

      {/* <div>Never Want to Miss Any Job News?</div> */}
      <Footer />
    </div>
  );
}

export default LandingPage;
