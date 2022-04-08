import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFolderPlus,
  faHandshakeSimple,
  faHourglass,
  faLocationPin,
  faMailBulk,
  faPhone,
  faPlus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <main>
      <div className="title h-1/4 w-full from-green-100 to-green-50 mb-10 bg-gradient-to-b">
        <h1 className="text-black text-center text-3xl font-black p-10">
          Les patients du cabinet
        </h1>
        <div className="flex justify-center">
          <span className="px-4 py-2 flex items-center font-bold rounded-full text-white  bg-primary mb-10">
            <FontAwesomeIcon icon={faUserPlus} size="2x" className="pr-2" />
            Ajouter un patient
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
      <div className="title h-1/4 w-full bg-white">
        <h2 className="text-primary text-center text-3xl font-black p-10">
          Recherchez un patient
        </h2>
        <p className="text-black text-center text-xl font-black">
          Entrez les premières lettres de nom du <br />
          patient que vous recherchez
        </p>
        <div className="flex justify-center">
          <span className="px-4 py-2 w-1/2 flex justify-center font-bold rounded-full text-black mb-10 border-solid border-2 border-black mt-2">
            Koscians
          </span>
        </div>
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
        <div className="w-full mx-auto max-w-xl rounded-lg shadow-lg px-5 py-4 text-gray-800 dark:text-gray-50 mt-32 border-solid border-2 border-primary">
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
      </div>
    </main>
  );
}

export default Home;
