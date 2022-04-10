import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <nav className="relative flex flex-wrap items-center justify-start px-2 py-3 bg-white">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex flex-row justify-start">
          <img className="h-20" src="P.png" alt="Lettre P Logo" />
          <img className="h-20" src="O.png" alt="Lettre P Logo" />
          <img className="h-20" src="L.png" alt="Lettre L Logo" />
          <img className="h-20" src="O.png" alt="Lettre O Logo" />
          <div className="flex justify-end w-full">
          
            <p className="invisible lg:visible text-black font-bold flex items-center p-3">Arthaud<br />Primevert</p>
            <img
              className="h-20"
              src="avatar patient.png"
              alt="Avatar patient"
            />
            <FontAwesomeIcon
              icon={faCheck}
              size="2x"
              className="flex items-center text-primary invisible lg:visible"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
