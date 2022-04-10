import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFolderPlus,
  faHandshakeSimple,
  faHourglass,
  faLocationPin,
  faPhone,
  faPlus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";


function Home() {
  return (
    <main className="h-full w-full">
      
      <div className="title lg:float-right lg:w-10/12 h-1/4 from-green-100 to-green-50 bg-gradient-to-b">
        <h1 className="text-black text-center text-3xl font-black p-10">
          Les patients du cabinet
        </h1>
        <div className="lg:flex justify-around">
          <div className="flex justify-center">
            <span className="px-4 py-2 flex items-center font-bold rounded-full text-white  bg-primary mb-10">
              <li className="list-none">
                <a className="flex items-center" href="/addpatient">
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    size="2x"
                    className="pr-2"
                  />
                  Ajouter un patient
                </a>
              </li>
            </span>
          </div>

          <div className="flex justify-center">
            <span className="px-4 py-2 flex items-center font-bold rounded-full text-white  bg-primary mb-10">
              <FontAwesomeIcon icon={faHourglass} size="2x" className="pr-2" />
              Patients en attente
            </span>
          </div>
          <div className="flex justify-center">
            <span className="px-4 py-2 flex items-center font-bold rounded-full text-primary mb-10 border-solid border-2 border-primary">
              <FontAwesomeIcon icon={faFolderPlus} size="2x" className="pr-2" />
              Patients archivés
            </span>
          </div>
          <div className="flex justify-center">
            <span className="px-4 py-2 flex items-center font-bold rounded-full text-primary mb-10 border-solid border-2 border-primary">
              <FontAwesomeIcon
                icon={faHandshakeSimple}
                size="2x"
                className="pr-2"
              />
              Voir les aidants
            </span>
          </div>
        </div>
      </div>
      <div className="title h-1/4 w-full bg-white lg:float-right lg:w-10/12">
        <h2 className="text-primary text-center text-3xl font-black p-10">
          Recherchez un patient
        </h2>
        <p className="text-black text-center text-xl font-black">
          Entrez les premières lettres de nom du <br />
          patient que vous recherchez
        </p>
        <div className="flex justify-center mt-6">
          <div className="mb-3 xl:w-96">
            <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
              <input
                type="search"
                class="form-control relative flex-auto min-w-0 block w-1/2 px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <button
                className="btn px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                type="button"
                id="button-addon2"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  className="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:flex flex-wrap mb-10">
          <div className="border-t-2 border-gray ml-6 mr-6"></div>
          <div className="w-full mx-auto max-w-xl rounded-lg bg-third dark:bg-third shadow-lg px-5 py-4 text-gray-800 dark:text-gray-50 mt-20">
            <div className="w-full pt-1 text-center -mt-20 mx-auto">
              <img
                alt="profil patiente"
                src="avatar patiente.png"
                className="mx-auto object-cover rounded-full h-32 w-32"
              />
            </div>
            <div className="w-full">
              <div className="text-center mb-6">
                <h3 className="text-primary dark:text-primary text-2xl font-bold">
                  Cécile Moulin
                </h3>
                <p className="text-black text-xl">81 ans</p>
              </div>
              <div className="p-2 w-full mb-4">
                <div className="flex justify-start flex-col text-2xl text-gray-400 dark:text-black">
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faPhone}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold mb-4">
                      04 77 36 65 95
                    </span>
                  </div>
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold mb-4">
                      celine.moulin@gmail.com
                    </span>
                  </div>
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faLocationPin}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold">
                      16 rue Maurice Bouchor
                      <br />
                      69007 Lyon{" "}
                    </span>
                  </div>
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faPlus}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold">
                      voir ses ordonnances
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto max-w-xl rounded-lg shadow-lg px-5 py-4 text-gray-800 dark:text-gray-50 mt-20 border-solid border-2 border-primary ">
            <div className="w-full pt-1 text-center -mt-20 mx-auto">
              <img
                alt="profil patiente"
                src="avatar patiente 3 1.png"
                className="mx-auto object-cover rounded-full h-32 w-32"
              />
            </div>
            <div className="w-full">
              <div className="text-center mb-6">
                <h3 className="text-primary dark:text-primary text-2xl font-bold">
                  Julie Masselis{" "}
                </h3>
                <p className="text-black text-xl">39 ans</p>
              </div>
              <div className="p-2 w-full mb-4">
                <div className="flex justify-start flex-col text-2xl text-gray-400 dark:text-black">
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faPhone}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold mb-4">
                      04 78 26 55 05
                    </span>
                  </div>
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold mb-4">
                      julie.masselis@gmail.com
                    </span>
                  </div>
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faLocationPin}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold">
                      16 rue Simone de Beauvoir
                      <br />
                      69007 Lyon{" "}
                    </span>
                  </div>
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faPlus}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold">
                      voir ses ordonnances
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto max-w-xl rounded-lg bg-third dark:bg-third shadow-lg px-5 py-4 text-gray-800 dark:text-gray-50 mt-20">
            <div className="w-full pt-1 text-center -mt-20 mx-auto">
              <img
                alt="profil patiente"
                src="avatar patient.png"
                className="mx-auto object-cover rounded-full h-32 w-32"
              />
            </div>
            <div className="w-full">
              <div className="text-center mb-6">
                <h3 className="text-primary dark:text-primary text-2xl font-bold">
                  René Guitay{" "}
                </h3>
                <p className="text-black text-xl">41 ans</p>
              </div>
              <div className="p-2 w-full mb-4">
                <div className="flex justify-start flex-col text-2xl text-gray-400 dark:text-black">
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faPhone}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold mb-4">
                      04 78 26 55 05
                    </span>
                  </div>
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold mb-4">
                      rené.guitay@gmail.com
                    </span>
                  </div>
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faLocationPin}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold">
                      24 rue Simone de Beauvoir
                      <br />
                      69007 Lyon{" "}
                    </span>
                  </div>
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faPlus}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold">
                      voir ses ordonnances
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto max-w-xl rounded-lg shadow-lg px-5 py-4 text-gray-800 dark:text-gray-50 mt-20 border-solid border-2 border-primary">
            <div className="w-full pt-1 text-center -mt-20 mx-auto">
              <img
                alt="profil patiente"
                src="avatar patiente 3 1.png"
                className="mx-auto object-cover rounded-full h-32 w-32"
              />
            </div>
            <div className="w-full">
              <div className="text-center mb-6">
                <h3 className="text-primary dark:text-primary text-2xl font-bold">
                  Clara Camalet{" "}
                </h3>
                <p className="text-black text-xl">39 ans</p>
              </div>
              <div className="p-2 w-full mb-4">
                <div className="flex justify-start flex-col text-2xl text-gray-400 dark:text-black">
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faPhone}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold mb-4">
                      04 78 26 55 05
                    </span>
                  </div>
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold mb-4">
                      clara.camelet@gmail.com
                    </span>
                  </div>
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faLocationPin}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold">
                      16 rue Simone de Beauvoir
                      <br />
                      69007 Lyon{" "}
                    </span>
                  </div>
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faPlus}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold">
                      voir ses ordonnances
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto max-w-xl rounded-lg bg-third dark:bg-third shadow-lg px-5 py-4 text-gray-800 dark:text-gray-50 mt-20">
            <div className="w-full pt-1 text-center -mt-20 mx-auto">
              <img
                alt="profil patiente"
                src="avatar patiente21.png"
                className="mx-auto object-cover rounded-full h-32 w-32"
              />
            </div>
            <div className="w-full">
              <div className="text-center mb-6">
                <h3 className="text-primary dark:text-primary text-2xl font-bold">
                  Laura Dufour{" "}
                </h3>
                <p className="text-black text-xl">25 ans</p>
              </div>
              <div className="p-2 w-full mb-4">
                <div className="flex justify-start flex-col text-2xl text-gray-400 dark:text-black">
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faPhone}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold mb-4">
                      04 78 26 55 05
                    </span>
                  </div>
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold mb-4">
                      laura.dufour@gmail.com
                    </span>
                  </div>
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faLocationPin}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold">
                      24 rue Simone de Beauvoir
                      <br />
                      69007 Lyon{" "}
                    </span>
                  </div>
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faPlus}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold">
                      voir ses ordonnances
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto max-w-xl rounded-lg shadow-lg px-5 py-4 text-gray-800 dark:text-gray-50 mt-20 border-solid border-2 border-primary ">
            <div className="w-full pt-1 text-center -mt-20 mx-auto">
              <img
                alt="profil patiente"
                src="avatar patient32.png"
                className="mx-auto object-cover rounded-full h-32 w-32"
              />
            </div>
            <div className="w-full">
              <div className="text-center mb-6">
                <h3 className="text-primary dark:text-primary text-2xl font-bold">
                  Etienne Morlé{" "}
                </h3>
                <p className="text-black text-xl">35 ans</p>
              </div>
              <div className="p-2 w-full mb-4">
                <div className="flex justify-start flex-col text-2xl text-gray-400 dark:text-black">
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faPhone}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold mb-4">
                      04 78 26 55 05
                    </span>
                  </div>
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold mb-4">
                      etienne.morlé@gmail.com
                    </span>
                  </div>
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faLocationPin}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold">
                      16 rue Simone de Beauvoir
                      <br />
                      69007 Lyon{" "}
                    </span>
                  </div>
                  <div className="flex flex-row mb-4">
                    <FontAwesomeIcon
                      icon={faPlus}
                      size="2x"
                      className="pr-2 text-primary"
                    />
                    <span className="text-black font-bold">
                      voir ses ordonnances
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
