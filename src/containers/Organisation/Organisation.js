import React from "react";
import Card from "./OrgCard.jsx";
import img1 from "../../assets/4.jpeg";
import img2 from "../../assets/4.jpeg";
import img3 from "../../assets/4.jpeg";
import axios from "axios";

class Organisation extends React.Component {
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
    axios
      .get("http://127.0.0.1:8000/api/all/")
      .then((response) => console.log(response))
      .then((response) => {
        this.setState({
          ngo_image: response.data.results[1].ngo_image,
          main_image: response.data.results[1].main_image,
          title: response.data.results[1].title,
          ngo_name: response.data.results[1].ngo_name,
          ketto_link: response.data.results[1].ketto_link,
          ngo_email: response.data.results[1].ngo_email,
          ngo_website: response.data.results[1].ngo_website,
          ngo_contact: response.data.results[1].ngo_contact,
          ngo_location: response.data.results[1].ngo_location,
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
    let ngoContaact = this.state.ngo_contact;
    let ngoLocation = this.state.ngo_location;

    return (
      <React.Fragment>
        <div className="container-fluid3 d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <Card
                imgsrc={img1}
                ngologo={img1}
                heading="Heading 1"
                title="Ngo 1"
                contact="123456744"
                email="test@test.com"
                location="Rupa ki Nangal"
              />
            </div>
            <div className="col-md-4">
              <Card
                imgsrc={img2}
                ngologo={img1}
                heading="Heading 2"
                title="Ngo 2"
                contact="1234567"
                email="test@test.com"
                location="Rupa ki Nangal"
              />
            </div>
            <div className="col-md-4">
              <Card
                imgsrc={img3}
                ngologo={img1}
                heading="Heading 3"
                title="Ngo 3"
                contact="1234567"
                email="test@test.com"
                location="Rupa ki Nangal"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Organisation;
