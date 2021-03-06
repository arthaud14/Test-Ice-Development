/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const [slideOpen, setSlideOpen] = useState(false);
  const [slideTwoOpen, setSlideTwoOpen] = useState(false);
  return (
    <div
      className="w-2/12 h-full bg-primary absolute invisible lg:visible"
      id="sidenav"
    >
      <div className="pt-10 pb-2 px-6"></div>
      <ul className="relative px-1">
        <li className="relative">
          <a
            className="flex items-center text-xl font-bold py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-black hover:bg-blue-50 transition duration-300 ease-in-out"
            href="/"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-3 h-3 mr-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
              ></path>
            </svg>
            <span>Accueil</span>
          </a>
        </li>
        <li className="relative" id="sidenavSecEx2">
          <a
            className="flex items-center text-xl font-bold py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-black hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavSecEx2"
            aria-expanded="false"
            aria-controls="collapseSidenavSecEx2"
            href="/Arrangement"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-3 h-3 mr-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
              ></path>
            </svg>
            <span>Mes Ordonnances</span>
          </a>
        </li>
        <li className="relative" id="sidenavSecEx3">
          <a
            className="flex items-center text-xl font-bold py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-black hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavSecEx3"
            aria-expanded="false"
            aria-controls="collapseSidenavSecEx3"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-3 h-3 mr-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
              ></path>
            </svg>
            <div>
              <button
                className="font-bold"
                type="button"
                onClick={() => setSlideOpen(!slideOpen)}
              >
                Mes Patients
              </button>
            </div>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-3 h-3 ml-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              ></path>
            </svg>
          </a>
          <div
            className={
              "flex flex-grow items-center" + (slideOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="relative px-1">
              <li className="relative">
                <a
                  href="#!"
                  className="flex items-center text-l font-bold py-4 pl-12 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-black hover:bg-blue-50 transition duration-300 ease-in-out"
                >
                  Tous les patients
                </a>
              </li>
              <li className="relative">
                <a
                  href="#!"
                  className="flex items-center text-l font-bold py-4 pl-12 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-black hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                >
                  Patients en attente{" "}
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <ul className="relative px-1">
        <li className="relative">
          <a
            className="flex items-center py-4 px-6 h-12 overflow-hidden text-white font-bold text-xl -ellipsis whitespace-nowrap rounded hover:text-black hover:bg-blue-50 transition duration-300 ease-in-out"
            href="#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-3 h-3 mr-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
              ></path>
            </svg>
            <span>Mes Pharmacies</span>
          </a>
        </li>
        <li className="relative" id="sidenavXxEx2">
          <a
            className="flex items-center text-xl py-4 px-6 h-12 overflow-hidden text-white font-bold text-ellipsis whitespace-nowrap rounded hover:text-black hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavXxEx2"
            aria-expanded="false"
            aria-controls="collapseSidenavXxEx2"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="comments"
              className="w-3 h-3 mr-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"
              ></path>
            </svg>
            <div>
              <button
                className="font-bold"
                type="button"
                onClick={() => setSlideTwoOpen(!slideTwoOpen)}
              >
                Mes Documents
              </button>
            </div>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-3 h-3 ml-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              ></path>
            </svg>
          </a>
          <div
            className={
              "flex flex-grow items-center" +
              (slideTwoOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul
              className="relative accordion-collapse collapse"
              id="collapseSidenavXxEx2"
              aria-labelledby="sidenavXxEx2"
              data-bs-parent="#sidenavSecExample"
            >
              <li className="relative">
                <a
                  href="#!"
                  className="flex items-center text-l font-bold py-4 pl-12 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-black hover:bg-blue-50 transition duration-300 ease-in-out"
                >
                  T??l??chargements
                </a>
              </li>
              <li className="relative">
                <a
                  href="#!"
                  className="flex items-center text-l font-bold py-4 pl-12 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-black hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                >
                  Archiv??s
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="relative" id="sidenavXxEx3">
          <a
            className="flex items-center text-xl font-bold py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-black hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavXxEx3"
            aria-expanded="false"
            aria-controls="collapseSidenavXxEx3"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-3 h-3 mr-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"
              ></path>
            </svg>
            <span>Mes Pilbeez</span>
          </a>

          <li className="relative" id="sidenavSecEx2">
            <a
              className="flex items-center text-xl font-bold py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-black hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSidenavSecEx2"
              aria-expanded="false"
              aria-controls="collapseSidenavSecEx2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="w-3 h-3 mr-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                ></path>
              </svg>
              <span>Parrainage</span>
            </a>
          </li>
        </li>
      </ul>
      <div className="text-center bottom-4 absolute w-1/2 bg-white rounded-r-lg">
        <p className="py-2">
          <a href="tel:+33688072517">
          <FontAwesomeIcon
            icon={faPhone}
            size="2x"
            className="pr-4 text-primary"
            href="tel:+33688072517"
          />
          </a>
          <a href="/contactus">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className="pr-2 text-primary"
            
          />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
