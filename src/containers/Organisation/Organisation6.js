import React from "react";
import Card from "./OrgCard";
import axios from "axios";
import "./Organisation.css";

class Organisation6 extends React.Component {
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
    this.fetchData6 = this.fetchData6.bind(this);
  }

  componentDidMount() {
    this.fetchData6();
  }

  fetchData6() {
    axios.get("http://127.0.0.1:8000/api/all/").then((res) => {
      this.setState({
        ngo_image: res.data.results[0].ngo_image,
        main_image: res.data.results[0].main_image,
        title: res.data.results[0].title,
        ngo_name: res.data.results[0].ngo_name,
        ketto_link: res.data.results[0].ketto_link,
        ngo_email: res.data.results[0].ngo_email,
        ngo_website: res.data.results[0].ngo_website,
        ngo_contact: res.data.results[0].ngo_contact,
        ngo_location: res.data.results[0].ngo_location,
      });
    });
  }
  render() {
    let mainImage0 = this.state.main_image;
    let ngoImage0 = this.state.ngo_image;
    let title0 = this.state.title;
    let ngoName0 = this.state.ngo_name;
    let kettoLink0 = this.state.ketto_link;
    let ngoEmail0 = this.state.ngo_email;
    let ngoWebsite0 = this.state.ngo_website;
    let ngoContact0 = this.state.ngo_contact;
    let ngoLocation0 = this.state.ngo_location;
    const container0 = {
      position: "absolute",
      top: "0px",
      left: "1250px",
    };
    return (
      <React.Fragment>
        <div
          className="container-fluid3 d-flex justify-content-center"
          style={container0}
        >
          <div className="row">
            <div className="col-md-4">
              <Card
                imgsrc={mainImage0}
                ngologo={ngoImage0}
                heading={title0}
                title={ngoName0}
                contact={ngoContact0}
                email={ngoEmail0}
                location={ngoLocation0}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Organisation6;
