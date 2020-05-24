import React from "react";
import Card from "./OrgCard";
import axios from "axios";
import "./Organisation.css";

class Organisation3 extends React.Component {
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
    this.fetchData3 = this.fetchData3.bind(this);
  }

  componentDidMount() {
    this.fetchData3();
  }

  fetchData3() {
    axios.get("http://127.0.0.1:8000/api/all/").then((res) => {
      this.setState({
        ngo_image: res.data.results[3].ngo_image,
        main_image: res.data.results[3].main_image,
        title: res.data.results[3].title,
        ngo_name: res.data.results[3].ngo_name,
        ketto_link: res.data.results[3].ketto_link,
        ngo_email: res.data.results[3].ngo_email,
        ngo_website: res.data.results[3].ngo_website,
        ngo_contact: res.data.results[3].ngo_contact,
        ngo_location: res.data.results[3].ngo_location,
      });
    });
  }
  render() {
    let mainImage3 = this.state.main_image;
    let ngoImage3 = this.state.ngo_image;
    let title3 = this.state.title;
    let ngoName3 = this.state.ngo_name;
    let kettoLink3 = this.state.ketto_link;
    let ngoEmail3 = this.state.ngo_email;
    let ngoWebsite3 = this.state.ngo_website;
    let ngoContact3 = this.state.ngo_contact;
    let ngoLocation3 = this.state.ngo_location;

    return (
      <React.Fragment>
        <div className="container-fluid3 d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <Card
                imgsrc={mainImage3}
                ngologo={ngoImage3}
                heading={title3}
                title={ngoName3}
                contact={ngoContact3}
                email={ngoEmail3}
                location={ngoLocation3}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Organisation3;
