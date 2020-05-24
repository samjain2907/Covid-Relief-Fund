import React from "react";
import Card from "./OrgCard";
import axios from "axios";
import "./Organisation.css";

class Organisation2 extends React.Component {
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
    this.fetchData2 = this.fetchData2.bind(this);
  }

  componentDidMount() {
    this.fetchData2();
  }

  fetchData2() {
    axios.get("http://127.0.0.1:8000/api/all/").then((res) => {
      this.setState({
        ngo_image: res.data.results[2].ngo_image,
        main_image: res.data.results[2].main_image,
        title: res.data.results[2].title,
        ngo_name: res.data.results[2].ngo_name,
        ketto_link: res.data.results[2].ketto_link,
        ngo_email: res.data.results[2].ngo_email,
        ngo_website: res.data.results[2].ngo_website,
        ngo_contact: res.data.results[2].ngo_contact,
        ngo_location: res.data.results[2].ngo_location,
      });
    });
  }
  render() {
    let mainImage2 = this.state.main_image;
    let ngoImage2 = this.state.ngo_image;
    let title2 = this.state.title;
    let ngoName2 = this.state.ngo_name;
    let kettoLink2 = this.state.ketto_link;
    let ngoEmail2 = this.state.ngo_email;
    let ngoWebsite2 = this.state.ngo_website;
    let ngoContact2 = this.state.ngo_contact;
    let ngoLocation2 = this.state.ngo_location;

    return (
      <React.Fragment>
        <div className="container-fluid3 d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <Card
                imgsrc={mainImage2}
                ngologo={ngoImage2}
                heading={title2}
                title={ngoName2}
                contact={ngoContact2}
                email={ngoEmail2}
                location={ngoLocation2}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Organisation2;
