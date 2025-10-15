import nature from "../images/nature.jpeg";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="container">
        <div className="main">
          <div className="main-text mt-5">
            <div>
              <h6 className="text">Start traveling with us</h6>
            </div>
            <div className="slogan">
              <h1>Let’s enjoy your desired trip with Tourice</h1>
            </div>
          </div>
        </div>
        <div className="image-container mt-5">
          <img src={nature} alt="Nature" className="img-fluid" />
        </div>
      </div>
    </>
  );
}

export default Home;
