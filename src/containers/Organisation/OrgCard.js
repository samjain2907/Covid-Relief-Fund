import React from "react";
import "../Organisation/Organisation.css";
// const cardStyle = {
//   width: "25rem",
// };

const card = (props) => {
  return (
    <React.Fragment>
      <div className="card2 text-center shadow">
        <div className="overflow2">
          <img src={props.imgsrc} alt="image" className="card2-img-top" />
        </div>
        <div className="card2-body text-dark">
          <h5 className="card2-title">{props.heading}</h5>

          <h4 className="card3-title">{props.title}</h4>
          <img src={props.ngologo} alt="logo" className="ngo-logo" />

          <ul className="list">
            <li>
              <strong className="card2-text text-secondary">
                Contact: <u>{props.contact}</u>
              </strong>
            </li>
            <li>
              <strong className="card2-text text-secondary">
                Email:<u> {props.email}</u>
              </strong>
            </li>
            <li>
              <strong className="card2-text text-secondary">
                Location: <u>{props.location}</u>
              </strong>
            </li>
          </ul>

          <button type="button" class="btn2 btn-danger" href="#">
            Donate Now
          </button>
        </div>
      </div>

      {/* <div className="card3 text-center shadow">
        <div className="overflow3">
          <img src={props.imgsrc} alt="image" className="card3-img-top" />
        </div>
        <div className="card3-body text-dark">
          <h5 className="card3-title">{props.heading}</h5>

          <h4 className="card4-title">{props.title}</h4>
          <img src={props.ngologo} alt="logo" className="ngo-logo1" />

          <ul className="list1">
            <li>
              <strong className="card3-text text-secondary">
                Contact: <u>{props.contact}</u>
              </strong>
            </li>
            <li>
              <strong className="card3-text text-secondary">
                Email:<u> {props.email}</u>
              </strong>
            </li>
            <li>
              <strong className="card3-text text-secondary">
                Location: <u>{props.location}</u>
              </strong>
            </li>
          </ul>

          <button type="button" class="btn3 btn-danger" href="#">
            Donate Now
          </button>
        </div>  
      </div>  */}
    </React.Fragment>
  );
};

export default card;
