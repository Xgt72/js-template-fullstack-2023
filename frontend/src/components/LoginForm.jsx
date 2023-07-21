import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

import logo from "../assets/logo/fitness-center.jpg";

function LoginForm() {
  const { idUser, setIdUser, idAdmin, setIdAdmin, role, setRole } =
    useUserContext();
  const navigate = useNavigate();
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("You must provide an email and a password!!!!");
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.warn(data);
          setIdUser(data.id);
          setRole(data.role);
          navigate(`/`);
        })
        .catch(() => {
          alert("Error to login, please try again!!!");
        });
    }
  };

  return (
    <div className="bg-black min-h-screen p-0 overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-3 md:top-16 left-0 ml-5 md:ml-10">
        <Link to="/">
          <img
            src={logo}
            alt="Fitness Center"
            className="w-10 h-10 md:w-20 md:h-20"
          />
        </Link>
      </div>
      <h1 className="mb-20 text-4xl md:text-5xl text-red-500 font-bold">
        Connexion
      </h1>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="block text-white mb-1">
            Adresse mail
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-red-500"
            placeholder="Entrez votre adresse e-mail"
            required
            value={email}
            onChange={handleChangeEmail}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="block text-white mb-1">
            Mot de passe
          </label>
          <input
            type={passwordIsVisible ? "text" : "password"}
            id="password"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-red-500"
            placeholder="Mot de passe"
            required
            value={password}
            onChange={handleChangePassword}
          />
          {!passwordIsVisible ? (
            <svg
              className="svg"
              onClick={() => setPasswordIsVisible(!passwordIsVisible)}
              type="button"
              src="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 11c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
              <path d="M12 10c-1.084 0-2 .916-2 2s.916 2 2 2 2-.916 2-2-.916-2-2-2z" />
            </svg>
          ) : (
            <svg
              onClick={() => setPasswordIsVisible(!passwordIsVisible)}
              type="button"
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M8.073 12.194 4.212 8.333c-1.52 1.657-2.096 3.317-2.106 3.351L2 12l.105.316C2.127 12.383 4.421 19 12.054 19c.929 0 1.775-.102 2.552-.273l-2.746-2.746a3.987 3.987 0 0 1-3.787-3.787zM12.054 5c-1.855 0-3.375.404-4.642.998L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.298-3.298c2.638-1.953 3.579-4.637 3.593-4.679l.105-.316-.105-.316C21.98 11.617 19.687 5 12.054 5zm1.906 7.546c.187-.677.028-1.439-.492-1.96s-1.283-.679-1.96-.492L10 8.586A3.955 3.955 0 0 1 12.054 8c2.206 0 4 1.794 4 4a3.94 3.94 0 0 1-.587 2.053l-1.507-1.507z" />
            </svg>
          )}
        </div>

        <div className="mb-6">
          <Link
            to="/mot-de-passe-oublie"
            className="text-red-500 hover:underline"
          >
            Mot de passe oublié ?
          </Link>
        </div>

        <button
          type="submit"
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-600"
        >
          Se connecter
        </button>

        <div className="mt-6">
          <Link to="/creer-compte" className="text-red-500 hover:underline">
            Créer un compte
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

// import { Link } from "react-router-dom";

// const LoginForm = () => {
//   return (
//     <div className="bg-black min-h-screen p-0 overflow-hidden flex flex-col items-center justify-center">
//       <h1 className="mb-20 text-4xl text-red-500 font-bold">Connexion</h1>
//       <form className="max-w-md mx-auto">
//         <div className="mb-3">
//           <label htmlFor="email" className="block text-white mb-1">
//             Adresse mail
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-red-500"
//             placeholder="Entrez votre adresse e-mail"
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="password" className="block text-white mb-1">
//             Mot de passe
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-red-500"
//             placeholder="Mot de passe"
//           />
//         </div>

//         <div className="mb-6">
//           <Link
//             to="/mot-de-passe-oublie"
//             className="text-red-500 hover:underline"
//           >
//             Mot de passe oublié ?
//           </Link>
//         </div>

//         <button
//           type="submit"
//           className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-600"
//         >
//           Se connecter
//         </button>

//         <div className="mt-6">
//           <Link to="/creer-compte" className="text-red-500 hover:underline">
//             Créer un compte
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
