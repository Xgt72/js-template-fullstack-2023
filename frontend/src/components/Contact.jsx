import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/fitness-center.jpg";

const Contact = () => {
  return (
    <div className="bg-black min-h-screen p-0 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-3 md:top-16 left-0 ml-5 md:ml-10">
        <Link to="/">
          <img
            src={logo}
            alt="Fitness Center"
            className="w-10 h-10 md:w-20 md:h-20"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center ml-5 mr-5 mb-8">
        <h1 className="text-center mt-10 text-3xl text-red-500 font-bold ml-5 md:ml-4 md:text-5xl">
          Contactez votre salle de sport Fitness Center
        </h1>
      </div>
      <div className="text-white mb-14 md:mb-10">
        <p className="text-center md:mt-20">
          Adresse: 110 rue de la gare 28240 La Loupe
        </p>
        <p>Tél: 02 37 01 02 03</p>
      </div>
      <form className="max-w-md mx-auto">
        <div className="mb-3">
          <label htmlFor="email" className="block text-white mb-1">
            Adresse mail
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-red-500"
            placeholder="Entrez votre adresse e-mail"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="block text-white mb-1">
            Objet
          </label>
          <input
            type="text"
            id="subject"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-red-500"
            placeholder="Entrez l'objet de votre message"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="block text-white mb-1">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-red-500 resize-none"
            rows="6"
            placeholder="Entrez votre message ici"
          />
        </div>

        <button
          type="submit"
          className="flex bg-red-500 text-white px-4 py-2 md:px-2 md:py-1 rounded-lg hover:bg-red-600 focus:outline-none md:mb-2 focus:bg-red-600"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
