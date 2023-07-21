import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/fitness-center.jpg";

const imageTypes = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];

export default function CreateContentForm() {
  const [name, setName] = useState("");
  const [dayofweek, setDayofweek] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [rate, setRate] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name ||
      !dayofweek ||
      !start ||
      !end ||
      !rate ||
      !description ||
      !selectedImage
    ) {
      alert("Veuillez remplir tous les champs obligatoires.");
    } else {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("dayofweek", dayofweek);
      formData.append("start", start);
      formData.append("end", end);
      formData.append("rate", rate);
      formData.append("description", description);
      formData.append("image", selectedImage);

      // Enregistrez les données dans votre backend en utilisant la route appropriée pour ajouter un nouveau sport dans la table
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/sports`, {
        method: "POST",
        credentials: "include",
        body: formData,
      })
        .then((res) => res.json())
        .then(() => {
          alert("Votre contenu a bien été enregistré.");
          setName("");
          setDayofweek("");
          setStart("");
          setEnd("");
          setRate("");
          setDescription("");
          setSelectedImage(null);
        })
        .catch((error) => {
          console.error("Error:", error);
          alert(
            "Une erreur s'est produite lors de l'enregistrement du contenu."
          );
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
      <div className="mt-20">
        <div className="create-content-form-container min-h-screen bg-[#242731]">
          <h2 className="text-white italic text-xl pl-4 text-center mb-5">
            Ajouter un nouveau contenu
          </h2>
          <div className="flex justify-center items-center">
            <div className="rounded-2xl shadow-lg shadow-slate-950/70 mb-10">
              <section className="">
                <p className="text-white italic text-sm pl-4">
                  * Champs obligatoires
                </p>
                <div className="bg-dark-02 rounded-24">
                  <form onSubmit={handleSubmit} className="mt-2 px-4">
                    <div className="flex flex-col ">
                      <div className="form-group flex flex-col items-start">
                        <label
                          htmlFor="name"
                          className="text-base mb-2 text-white"
                        >
                          Nom du sport :
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="px-4 py-1 text-black rounded-md w-full"
                        />
                      </div>

                      <div className="form-group flex flex-col items-start">
                        <label
                          htmlFor="dayofweek"
                          className="text-base mb-2 text-white"
                        >
                          Jour de la semaine :
                        </label>
                        <input
                          type="text"
                          id="dayofweek"
                          name="dayofweek"
                          value={dayofweek}
                          onChange={(e) => setDayofweek(e.target.value)}
                          className="px-4 py-1 text-black rounded-md w-full"
                        />
                      </div>

                      <div className="form-group flex flex-col items-start">
                        <label
                          htmlFor="start"
                          className="text-base mb-2 text-white"
                        >
                          Heure de début :
                        </label>
                        <input
                          type="text"
                          id="start"
                          name="start"
                          value={start}
                          onChange={(e) => setStart(e.target.value)}
                          className="px-4 py-1 text-black rounded-md w-full"
                        />
                      </div>

                      <div className="form-group flex flex-col items-start">
                        <label
                          htmlFor="end"
                          className="text-base mb-2 text-white"
                        >
                          Heure de fin :
                        </label>
                        <input
                          type="text"
                          id="end"
                          name="end"
                          value={end}
                          onChange={(e) => setEnd(e.target.value)}
                          className="px-4 py-1 text-black rounded-md w-full"
                        />
                      </div>

                      <div className="form-group flex flex-col items-start">
                        <label
                          htmlFor="rate"
                          className="text-base mb-2 text-white"
                        >
                          Tarif (en euros) :
                        </label>
                        <input
                          type="number"
                          id="rate"
                          name="rate"
                          value={rate}
                          onChange={(e) => setRate(e.target.value)}
                          className="px-4 py-1 text-black rounded-md w-full"
                        />
                      </div>

                      <div className="form-group flex flex-col items-start">
                        <label
                          htmlFor="description"
                          className="text-base mb-2 text-white"
                        >
                          Description :
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="px-4 py-1 text-black rounded-md w-full"
                        />
                      </div>

                      <div className="form-group flex flex-col items-start">
                        <label
                          htmlFor="image"
                          className="text-base mb-2 text-white"
                        >
                          Image :
                        </label>
                        <input
                          type="file"
                          id="image"
                          name="image"
                          accept={imageTypes.join(",")}
                          onChange={(e) => setSelectedImage(e.target.files[0])}
                          className="px-4 py-1 text-white rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="text-center ">
                      <button
                        type="submit"
                        className="bg-[#323847] rounded-full shadow-slate-950/90 shadow-xl mb-5 text-white
                    hover:text-white sm:hover:bg-white/30 w-5/12 mx-4"
                      >
                        <p className="px-6 py-2 text-center">Ajouter</p>
                      </button>

                      <Link to="/">
                        <button
                          type="submit"
                          className="bg-[#323847] rounded-full shadow-slate-950/90 shadow-xl mb-5 text-white
                  hover:text-white sm:hover:bg-white/30 w-5/12"
                        >
                          <p className="px-6 py-2 text-center">Retour</p>
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
