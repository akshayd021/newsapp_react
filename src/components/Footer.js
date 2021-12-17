import React from "react";
import footerlogo from "../asset/footerlogo.png";

function Footer() {
  return (
    <>
      <div className="container-fluid ml-5 footer">
        <div className="row">
          <div className="col-md-8 col-sm-12 foot">
            <h3 className="headingggg">CATEGORIES</h3>
            <p>
              Gujarat| National | International | Business | Sports |
              Entertainment | NRI News | Astro | Health | Lifestyle & Fashion |
              Editorial | Relationship | Science & Technology | Mumbai
            </p>
            <h3>EDITORIAL</h3>
            <p>
              Alpviram | Inside Story | Cine Magic | Vichar Vihar | Delhi ni
              Vaat | News Focus | Tantri Lekh | Prasangpat | To The Point | Mera
              Bharat Mahan | Around the World | Network | Saransh | Boj Viana ni
              Moj | Int ane Imarat | Aapna to adhar vanka | Samvedna |
            </p>
            <h3>MAGAZINES</h3>
            <p>
              Ravi Purti | Business Plus | Sahiyar | Shatdal | Dharmlok |
              Chitralok | Zagmag | Gujarat Samachar Plus |
            </p>
            <h3>CITY NEWS</h3>
            <p>
              Ahmedabad | Baroda | Surat | Rajkot | Bhavnagar | Bhuj |
              Kheda-Anand | Gandhinagar | North Gujart |
            </p>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="class">
              <div className="footer-right">
                <span>
                  Join 99,<b>421 Subscribers </b>and get a new article every
                  Day.
                </span>
              </div>
              <div className="form">
                <form className="d-flex mt-5">
                  <input
                    className="form-control "
                    type="search"
                    placeholder="Enter your Email ID"
                    aria-label="Search"
                  />
                  <button className="btn local" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
              <br /> <br /> <br /> <hr />
              <div className="footer-logo">
                <img src={footerlogo} alt=".." />
              </div>
              <div className="icons">
                <i class="fab fa-facebook" style={{ margin: "10px 15px" }}></i>

                <i class="fab fa-twitter" style={{ margin: "10px 15px" }}></i>

                <i class="fab fa-telegram" style={{ margin: "10px 15px" }}></i>

                <i
                  class="fab fa-linkedin-in"
                  style={{ margin: "10px 15px" }}
                ></i>

                <i class="fab fa-instagram" style={{ margin: "10px 15px" }}></i>

                <i class="fab fa-youtube" style={{ margin: "10px 15px" }}></i>
              </div>
           

            <div className="end">
              <b>About Us | Contact Us | Sitemap | Terms and Conditions | Advertise
              with us | Feedback | </b>
            </div>


          </div>
            <div className="andd">
          <p>  © All Rights Reserved 2021 Akshay Dholakiya</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
