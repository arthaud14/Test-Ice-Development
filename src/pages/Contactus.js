import React from 'react';

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

init("user_fiq8u5W728Z06uP64FZbk");

export default function ContactUs() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    Swal.fire({
      text: "Nous vous remercions pour votre message",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      icon: "success",
    });

    emailjs
      .sendForm(
        "service_yvs60d7",
        "template_j169p89",
        e.target,
        "user_fiq8u5W728Z06uP64FZbk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <main className="contactus items-center m-2 lg:float-right lg:w-10/12">
      <h1 className="text-primary text-center text-3xl font-bold mb-8 my-24 ml-20 mr-20">
        Formulaire de Contact
      </h1>
      <p className="text-primary text-2xl text-center font-semibold mb-24">
        Besoin d'informations ou d'une estimation ? Contactez-nous ! Nos devis
        sont gratuits et sans engagement.
      </p>
      <div className="flex items-center justify-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-lg"
          aria-label="Contact information"
        >
          <fieldset>
            <legend
              id="civilité"
              className="text-primary text-lg font-bold mb-2"
            >
              Civilité
            </legend>
            <label
              className="text-primary text-md font-bold"
              // aria-labelledby="civilité"
              for="madame"
            >
              <input
                className="mr-2"
                type="radio"
                id="madame"
                name="civility"
                value="Mme"
              />
              Mme
            </label>
            <label
              className="text-primary text-md font-bold"
              // aria-labelledby="civilité"
              for="mademoiselle"
            >
              <input
                className="m-4"
                type="radio"
                id="mademoiselle"
                name="civility"
                value="Mlle"
              />
              Mlle
            </label>
            <label
              className="text-primary text-md font-bold"
              // aria-labelledby="civilité"
              for="monsieur"
            >
              <input
                className="m-4"
                type="radio"
                id="monsieur"
                name="civility"
                value="Mr"
              />
              Mr
            </label>
            <div className="flex flex-wrap -mx-3 mb-6 mt-4">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block tracking-wide text-primary text-lg font-bold mb-2"
                  for="grid-first-name"
                >
                  Nom :
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-primary font-bold border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  name="lastname"
                  requiredTxt="Veuillez saisir votre nom"
                  type="text"
                  placeholder="Votre nom"
                  aria-required="true"
                  aria-invalid="false"
                  onblur="checkValidity('nom', ' ', 'Le nom saisi n’est pas valide (vous devez saisir votre nom)');"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block tracking-wide text-primary text-lg font-bold mb-2"
                  for="grid-last-name"
                >
                  Prénom :
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-primary font-bold border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  name="firstname"
                  type="text"
                  placeholder="Votre prénom"
                  aria-required="true"
                  aria-invalid="false"
                  onblur="checkValidity('prénom', ' ', 'Le prénom saisi n’est pas valide (vous devez saisir votre prénom)');"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block tracking-wide text-primary text-lg font-bold mb-2"
                  for="grid-email"
                >
                  E-mail :
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-primary font-bold border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  name="email"
                  type="email"
                  placeholder="Votre email"
                  aria-required="true"
                  aria-invalid="false"
                  onblur="checkValidity('email', ' ', 'Le format de l'email n'est pas valide');"
                  required
                />
              </div>
            </div>
            <label
              className="text-primary text-lg font-bold mb-2"
              for="grid-object"
            >
              L'objet de votre demande :
              <select
                id="grid-object"
                className="block w-54 py-2 px-3 border border-gray-300 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:text-primary mb-6 text-lg font-bold mt-4"
                name="object"
                required
              >
                <option value="">Selectionner une option</option>
                <option value="Audits">Ordonnances</option>
                <option value="Conseil">Patients</option>
                <option value="Expertise">Pharmacies</option>
                <option value="Formation">Parrainage</option>
              </select>
            </label>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block tracking-wide text-primary text-lg font-bold mb-2"
                  for="grid-message"
                >
                  Message :
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-primary font-bold border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="grid-message"
                  name="comment"
                  placeholder="Votre message"
                  aria-required="true"
                  aria-invalid="false"
                  onblur="checkValidity('message', ' ', 'Veuillez saisir votre message');"
                  required
                ></textarea>
              </div>
            </div>

            <ReCAPTCHA
              sitekey="6LfCrB8fAAAAAIKqmWFGrMgO5A0zbxfk0jIXJKiS"
              onChange={onChange}
            />

            <div className="flex justify-center">
              <div className=" ">
                <button
                  className="shadow bg-primary hover:bg-third focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-32 mt-6"
                  type="submit"
                >
                  Envoyer
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  );
}


