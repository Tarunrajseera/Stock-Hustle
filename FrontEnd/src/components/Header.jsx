import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="headings p-3 text-black">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="titleheader">
          Stock Hustle
          </Link>
          <ul className="nav mx-auto mb-0">
            <li>
              <Link to="/dashboard" className="nav-link px-3 text-black">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="nav-link px-3 text-black">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/market" className="nav-link px-3 text-black">
                Market
              </Link>
            </li>
            <li>
              <Link to="/chat" className="nav-link px-3 text-black">
                Chat
              </Link>
            </li>
            <li>
              <Link to="/learn" className="nav-link px-3 text-black">
                Learn
              </Link>
            </li>
          </ul>

          <div className="dropdown text-end">
            <a
              href="#"
              className="d-block link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://imgs.search.brave.com/yBqkEDtgOvpcIYbJc9TUtntmNLRYj3qVrP5njbw1YE8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ha20t/aW1nLWEtaW4udG9z/c2h1Yi5jb20vaW5k/aWF0b2RheS9pbWFn/ZXMvcGhvdG9fZ2Fs/bGVyeS8yMDI0MTEv/bHVja3lfYmhhc2th/ci5qcGc_VmVyc2lv/bklkPVVNbFBaekli/eDBETGpGOGFYUFho/ZjJHdnVtRmtRTC5M/JnNpemU9Njg2Oio"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </a>
            <ul
              className="dropdown-menu text-small"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <Link className="dropdown-item" to="/">
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
