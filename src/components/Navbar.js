import React from "react";
import logo from "../asset/logo.png";


function Navbar() {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
        <span className="date">
          13th December 2021 |<b>11:13 PM</b>{" "}
        </span>
      </div>

      <div className="navbar">
        <nav className="navbar sticky-top navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    City News
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Ahemdabad
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Baroda
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Surat
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Rajkot
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Bhavnagar
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Bhuj
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Kheda-Anand
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Gandhinagar
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        North Gujrat
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Mumbai
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Nation
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Internation
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    business
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Magazines
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Editorial
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Alpviram
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Inside Story
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cine Magic
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Vichar Vihar
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Delhi Ni Vat
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Near Focus
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Tantri Lekh
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Prasang Pat
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        To The Point
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Mera Bhrat Mahan
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Around The World
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Network
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Saransh
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Boj Vinani Moj
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Int Ane Imarat
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Aapna To Athar Vaka
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Samvedna
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    ePaper
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Magaziness
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Gujart
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            gujrat
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        NRI News
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Astro
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Health
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        LifrStyle & Fashion
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Relationship
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Science & Technoogy
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Follow us
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Classified
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
