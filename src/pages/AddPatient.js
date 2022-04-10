/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../components/Sidebar";
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

const AddPatient = () => {
  return (
    <div>
      <div className="title lg:float-right lg:w-10/12 h-1/4 from-green-100 to-green-50 mb-10 bg-gradient-to-b">
        <h1 className="text-black text-center text-3xl font-black p-10">
          Les patients du cabinet
        </h1>
      </div>
    </div>
  );
};

export default AddPatient;
