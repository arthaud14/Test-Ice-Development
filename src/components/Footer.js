import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div
      className="bg-primary w-4/5 pt-2 pb-2 xl:pt-8 bottom-0 left-0 right-0"
      aria-label="footer navigation"
      role="contentinfo"
    >
      <button
        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>

      <div
        className={
          "lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")
        }
        id="example-navbar-danger"
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:bg-third hover:text-white"
              href="/"
            >
              <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2">Accueil</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:bg-third hover:text-white"
              href="/advice"
            >
              <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2">Mes ordonnances</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:bg-third hover:text-white"
              href="/audits"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2">Mes Pharmacies</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:bg-third hover:text-white"
              href="/formation"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2">Mes documents</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:bg-third hover:text-white"
              href="/team"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2">Mes Pilbeez</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:bg-third hover:text-white"
              href="/contactus"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2">Parrainer au cabinet</span>
            </a>
          </li>
        </ul>
        
      </div>
    </div>
  );
}

export default Footer;
