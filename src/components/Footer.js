import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="w-full visible lg:invisible">
      <div
        className="bg-primary xl:pt-8 bottom-0 left-0 right-0"
        aria-label="footer navigation"
        role="contentinfo"
      >
        <div className="flex justify-between">
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>
          <span className="p-2 bg-yellow-300 visible lg:invisible">
            <p className="flex justify-end text-2xl text-white font-bold">
              1740
            </p>
            <p className="flex justify-center text-l text-black font-bold">
              points
            </p>
          </span>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:bg-third hover:text-primary"
                href="/"
              >
                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Accueil</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:bg-third hover:text-primary"
                href="/advice"
              >
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Mes ordonnances</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:bg-third hover:text-primary"
                href="/audits"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Mes Pharmacies</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:bg-third hover:text-primary"
                href="/formation"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Mes documents</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:bg-third hover:text-primary"
                href="/team"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Mes Pilbeez</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:bg-third hover:text-primary"
                href="/contactus"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Parrainer au cabinet</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
