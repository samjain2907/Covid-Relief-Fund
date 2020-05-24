import React from "react";
import "../Register/Register.css";

class Register extends React.Component {
  render() {
    const mystyle = {
      position: "absolute",
      top: "200px",
    };
    const mystylebtn = {
      position: "relative",
      top: "-30px",
      left: "400px",
    };

    return (
      <React.Fragment>
        <div className="container" style={mystyle}>
          <h1> Register with us</h1>
          <form>
            <div className="form-group row">
              <label for="nameOfOrg" className="col-sm-2 col-form-label">
                <strong> Organisation Name:</strong>
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="name"
                  placeholder="Enter here..."
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="location" className="col-sm-2 col-form-label">
                <strong>Place Of work:</strong>
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  placeholder="Enter here..."
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="location" className="col-sm-2 col-form-label">
                <strong> Website URL:</strong>
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="website"
                  placeholder="Enter here..."
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="contactNumber" className="col-sm-2 col-form-label">
                <strong> Contact Number:</strong>
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="contactNumber"
                  placeholder="Enter here..."
                />
              </div>
            </div>

            <div className="form-group row">
              <label for="emailAddress" className="col-sm-2 col-form-label">
                <strong> Email Address:</strong>
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="emailAddress"
                  placeholder="Enter here..."
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="mainPic" className="col-sm-2 col-form-label">
                <strong> Photo of your Organization in work:</strong>
              </label>
              <div className="col-sm-10">
                <form action="/action_page.php">
                  <input type="file" id="myFile" name="filename" />
                </form>
              </div>
            </div>
            <div className="form-group row">
              <label for="mainPic" className="col-sm-2 col-form-label">
                <strong> Logo of your Organization:</strong>
              </label>
              <div className="col-sm-10">
                <form action="/action_page.php">
                  <input type="file" id="myFile" name="filename" />
                </form>
              </div>
            </div>
            <div className="form-group row">
              <div classname="col-sm-10">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={mystylebtn}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
