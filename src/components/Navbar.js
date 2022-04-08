import React from "react";

function Navbar() {
  return (
    <nav className="relative flex flex-wrap items-center justify-start px-2 py-3 bg-white mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex flex-row justify-start lg:w-auto lg:static lg:block lg:justify-start">
          <img className="h-20" src="P.png" alt="Lettre P Logo" />
          <img className="h-20" src="O.png" alt="Lettre P Logo" />
          <img className="h-20" src="L.png" alt="Lettre L Logo" />
          <img className="h-20" src="O.png" alt="Lettre O Logo" />
          <div className="flex justify-end w-full">
            <img
              className="h-20"
              src="avatar patient.png"
              alt="Avatar patient"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
