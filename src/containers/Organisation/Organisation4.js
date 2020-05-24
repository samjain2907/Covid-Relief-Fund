import React from "react";
import Card from "./OrgCard";
import axios from "axios";
import "./Organisation.css";

class Organisation4 extends React.Component {
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
    this.fetchData4 = this.fetchData4.bind(this);
  }

  componentDidMount() {
    this.fetchData4();
  }

  fetchData4() {
    axios.get("http://127.0.0.1:8000/api/all/").then((res) => {
      this.setState({
        ngo_image: res.data.results[4].ngo_image,
        main_image: res.data.results[4].main_image,
        title: res.data.results[4].title,
        ngo_name: res.data.results[4].ngo_name,
        ketto_link: res.data.results[4].ketto_link,
        ngo_email: res.data.results[4].ngo_email,
        ngo_website: res.data.results[4].ngo_website,
        ngo_contact: res.data.results[4].ngo_contact,
        ngo_location: res.data.results[4].ngo_location,
      });
    });
  }
  render() {
    let mainImage4 = this.state.main_image;
    let ngoImage4 = this.state.ngo_image;
    let title4 = this.state.title;
    let ngoName4 = this.state.ngo_name;
    let kettoLink4 = this.state.ketto_link;
    let ngoEmail4 = this.state.ngo_email;
    let ngoWebsite4 = this.state.ngo_website;
    let ngoContact4 = this.state.ngo_contact;
    let ngoLocation4 = this.state.ngo_location;
    const container3 = {
      position: "absolute",
      top: "750px",
      left: "670px",
    };
    return (
      <React.Fragment>
        <div
          className="container-fluid2 d-flex justify-content-center"
          style={container3}
        >
          <div className="row">
            <div className="col-md-4">
              <Card
                imgsrc={mainImage4}
                ngologo={ngoImage4}
                heading={title4}
                title={ngoName4}
                contact={ngoContact4}
                email={ngoEmail4}
                location={ngoLocation4}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Organisation4;
