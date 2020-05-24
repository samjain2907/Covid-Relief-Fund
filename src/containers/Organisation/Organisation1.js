import React from "react";
import Card from "./OrgCard.js";
import axios from "axios";
import "./Organisation.css";

class Organisation1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      main_image: "",
      ngo_image: "",
      title: "",
      ngo_name: "",
      ketto_link: "",
      ngo_email: "",
      ngo_website: "",
      ngo_contact: "",
      ngo_location: "",
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    console.log("Fetching....!");
    axios.get("http://127.0.0.1:8000/api/all/").then((res) => {
      this.setState({
        ngo_image: res.data.results[1].ngo_image,
        main_image: res.data.results[1].main_image,
        title: res.data.results[1].title,
        ngo_name: res.data.results[1].ngo_name,
        ketto_link: res.data.results[1].ketto_link,
        ngo_email: res.data.results[1].ngo_email,
        ngo_website: res.data.results[1].ngo_website,
        ngo_contact: res.data.results[1].ngo_contact,
        ngo_location: res.data.results[1].ngo_location,
      });
    });
  }

  render() {
    let mainImage = this.state.main_image;
    let ngoImage = this.state.ngo_image;
    let title = this.state.title;
    let ngoName = this.state.ngo_name;
    let kettoLink = this.state.ketto_link;
    let ngoEmail = this.state.ngo_email;
    let ngoWebsite = this.state.ngo_website;
    let ngoContact = this.state.ngo_contact;
    let ngoLocation = this.state.ngo_location;

    const container1 = {
      position: "absolute",
      top: "100px",
      left: "100px",
    };
    return (
      <React.Fragment>
        <div
          className="container-fluid1 d-flex justify-content-center"
          style={container1}
        >
          <div className="row">
            <div className="col-md-4">
              <Card
                imgsrc={mainImage}
                ngologo={ngoImage}
                heading={title}
                title={ngoName}
                contact={ngoContact}
                email={ngoEmail}
                location={ngoLocation}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Organisation1;
