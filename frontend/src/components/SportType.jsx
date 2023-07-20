import { useState, useEffect } from "react";

function formatTime(time) {
  // Si le temps est vide ou non défini, retourne une chaîne vide
  if (!time) return "";
  // Récupère les heures et les minutes de la chaîne de temps
  const [hours, minutes] = time.split(":");
  // Retourne la chaîne formatée avec "H" pour les heures
  return `${hours}H${minutes}`;
}

function SportType() {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/sports")
      .then((res) => res.json())
      .then((response) => {
        const sportImages = response.slice(0, 70);
        setSports(sportImages);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []);

  return (
    <div>
      {sports.map((sport) => (
        <div key={sport.id} className="ml-4 text-white mt-8">
          <p className="ml-2 md:ml-4 text-red-500 text-2xl md:text-4xl font-bold mt-4 mb-2 md:mb-4">
            {sport.name}
          </p>
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/public/assets/images/${
              sport.image
            }`}
            alt={sport.name}
            className="md:ml-4 w-80 h-50 md:w-3/5 md:h-1/5"
          />
          <p className="ml-2 md:ml-4 text-white mt-2 text-lg md:text-2xl">
            {sport.description}
          </p>
          <p className="ml-2 md:ml-4 text-white mt-2 md:text-xl">
            {sport.dayofweek}
          </p>
          <p className="ml-2 md:ml-4 text-white mt-2 md:text-xl">
            {formatTime(sport.start)}
          </p>
          <p className="ml-2 md:ml-4 text-white md:text-xl">
            {formatTime(sport.end)}
          </p>
          <p className="ml-2 md:ml-4 text-white mt-2 md:text-base">
            {sport.rate} &euro;
          </p>
        </div>
      ))}
    </div>
  );
}

export default SportType;
