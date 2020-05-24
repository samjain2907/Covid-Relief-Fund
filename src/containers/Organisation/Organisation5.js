import React from "react";
import Card from "./OrgCard";
import axios from "axios";
import "./Organisation.css";

class Organisation5 extends React.Component {
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
    this.fetchData5 = this.fetchData5.bind(this);
  }

  componentDidMount() {
    this.fetchData5();
  }

  fetchData5() {
    axios.get("http://127.0.0.1:8000/api/all/").then((res) => {
      this.setState({
        ngo_image: res.data.results[5].ngo_image,
        main_image: res.data.results[5].main_image,
        title: res.data.results[5].title,
        ngo_name: res.data.results[5].ngo_name,
        ketto_link: res.data.results[5].ketto_link,
        ngo_email: res.data.results[5].ngo_email,
        ngo_website: res.data.results[5].ngo_website,
        ngo_contact: res.data.results[5].ngo_contact,
        ngo_location: res.data.results[5].ngo_location,
      });
    });
  }
  render() {
    let mainImage5 = this.state.main_image;
    let ngoImage5 = this.state.ngo_image;
    let title5 = this.state.title;
    let ngoName5 = this.state.ngo_name;
    let kettoLink5 = this.state.ketto_link;
    let ngoEmail5 = this.state.ngo_email;
    let ngoWebsite5 = this.state.ngo_website;
    let ngoContact5 = this.state.ngo_contact;
    let ngoLocation5 = this.state.ngo_location;
    const container5 = {
      position: "absolute",
      top: "750px",
      left: "100px",
    };
    return (
      <React.Fragment>
        <div
          className="container-fluid2 d-flex justify-content-center"
          style={container5}
        >
          <div className="row">
            <div className="col-md-4">
              <Card
                imgsrc={mainImage5}
                ngologo={ngoImage5}
                heading={title5}
                title={ngoName5}
                contact={ngoContact5}
                email={ngoEmail5}
                location={ngoLocation5}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Organisation5;
