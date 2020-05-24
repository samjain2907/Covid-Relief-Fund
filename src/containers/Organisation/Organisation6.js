import React from "react";
import Card from "./OrgCard";
import axios from "axios";
import "./Organisation.css";

class Organisation7 extends React.Component {
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
    this.fetchData7 = this.fetchData7.bind(this);
  }

  componentDidMount() {
    this.fetchData7();
  }

  fetchData6() {
    axios.get("http://127.0.0.1:8000/api/all/").then((res) => {
      this.setState({
        ngo_image: res.data.results[7].ngo_image,
        main_image: res.data.results[7].main_image,
        title: res.data.results[7].title,
        ngo_name: res.data.results[7].ngo_name,
        ketto_link: res.data.results[7].ketto_link,
        ngo_email: res.data.results[7].ngo_email,
        ngo_website: res.data.results[7].ngo_website,
        ngo_contact: res.data.results[7].ngo_contact,
        ngo_location: res.data.results[7].ngo_location,
      });
    });
  }
  render() {
    let mainImage7 = this.state.main_image;
    let ngoImage7 = this.state.ngo_image;
    let title7 = this.state.title;
    let ngoName7 = this.state.ngo_name;
    let kettoLink7 = this.state.ketto_link;
    let ngoEmail7 = this.state.ngo_email;
    let ngoWebsite7 = this.state.ngo_website;
    let ngoContact7 = this.state.ngo_contact;
    let ngoLocation7 = this.state.ngo_location;
    const container7 = {
      position: "absolute",
      top: "0px",
      left: "1250px",
    };
    return (
      <React.Fragment>
        <div
          className="container-fluid3 d-flex justify-content-center"
          style={container7}
        >
          <div className="row">
            <div className="col-md-4">
              <Card
                imgsrc={mainImage7}
                ngologo={ngoImage7}
                heading={title7}
                title={ngoName7}
                contact={ngoContact7}
                email={ngoEmail7}
                location={ngoLocation7}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Organisation7;
