import React from "react";
import Card from "./CardsUI";
import "../Home/Home.css";
import Img4 from "../../assets/4.jpeg";
import img1 from "../../assets/Card1.jpg";
import img2 from "../../assets/Card2.jpg";
import img3 from "../../assets/Card5.jpeg";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import img8 from "../../assets/8.png";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <img src={Img4} alt="image1" className="image" />

        <div className="quote">
          <h1>
            <strong>No one has ever become Poor by giving</strong>
          </h1>
          <h6>- Anne Frank</h6>
        </div>
        <button type="button" class="btn btn-danger">
          <h2>Donate Now</h2>
        </button>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <Card
                imgsrc={img1}
                title="Homeless"
                data="People have been left homeless"
              />
            </div>
            <div className="col-md-4">
              <Card
                imgsrc={img2}
                title="No Job"
                data="They have no jobs due to the lockdown"
              />
            </div>
            <div className="col-md-4">
              <Card
                imgsrc={img3}
                title="No Food!! "
                data="They even don't have food to eat"
              />
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <h1>Your donation can help in many ways!</h1>
          <hr />
          <div className="card1">
            <div className="row">
              <div className="col-md-4">
                <img src={img6} class="img-fluid" alt="" />
              </div>
              <div className="col-md-8">
                <h2 className="card-title mt-2">Food Packets</h2>
                <p>
                  Since many people have become a victim of the lockdown they
                  have been left with no food, especially the migrant labrours .
                  Your small donation will help them in providing them with food
                  packets
                </p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-4">
                <img src={img7} class="img-fluid" alt="" />
              </div>
              <div className="col-md-8">
                <h2 className="card-title mt-2">Masks and Sanitizers</h2>
                <p>
                  Many of the vulnerable sections of the society have been
                  completely left open to the virus as they dont have proper
                  masks to cover themselves. Some organisations working on
                  ground are providing them with masks. Your small contribution
                  can save many from being infected.
                </p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-4">
                <img src={img8} class="img-fluid" alt="" />
              </div>
              <div className="col-md-8">
                <h2 className="card-title mt-2">Daily Houselhold Essentials</h2>
                <p>
                  With hundreds of towns and cities under cufew like situations
                  due to high number of Covid cases, the families are facing
                  severe shortages of several household items. Your contribution
                  can help the NGO's to provide them with the help they need in
                  theses times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
