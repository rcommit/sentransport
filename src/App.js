import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Recherche from "./Recherche";
import LigneBus from "./LigneBus";
import DetailLigne from "./DetailLigne";
import Footer from "./Footer";

function App() {
  const [recherche, setRecherche] = useState("");
  const [ligneSelectionnee, setLigneSelectionnee] = useState(null);
  const [nombreRecherches, setNombreRecherches] = useState(0);

  const lignes = [
    {
      id: 1,
      numero: "1",
      depart: "Parcelles Assainies",
      arrivee: "Plateau",
      arrets: 14,
      couleur: "#e74c3c",
      listeArrets: [
        "Parcelles U14",
        "Parcelles U10",
        "Camberene",
        "Patte d'Oie",
        "Grand Dakar",
        "Colobane",
        "Ponty",
        "Plateau",
      ],
    },
    {
      id: 2,
      numero: "7",
      depart: "Guediawaye",
      arrivee: "Place Obe",
      arrets: 18,
      couleur: "#3498db",
      listeArrets: [
        "Guediawaye",
        "Pikine",
        "Thiaroye",
        "Keur Massar",
        "Grand Yoff",
        "Parcelles",
        "Liberte 6",
        "Place Obe",
      ],
    },
    {
      id: 3,
      numero: "15",
      depart: "Pikine",
      arrivee: "Medina",
      arrets: 12,
      couleur: "#2ecc71",
      listeArrets: [
        "Pikine Centre",
        "Thiaroye Gare",
        "Hann",
        "Colobane",
        "Fass",
        "Medina",
      ],
    },
    {
      id: 4,
      numero: "23",
      depart: "Ouakam",
      arrivee: "Grand Dakar",
      arrets: 10,
      couleur: "#f39c12",
      listeArrets: [
        "Ouakam Village",
        "Mermoz",
        "Fann",
        "Point E",
        "Liberte 5",
        "Grand Dakar",
      ],
    },
    {
      id: 5,
      numero: "8",
      depart: "Almadies",
      arrivee: "Colobane",
      arrets: 16,
      couleur: "#9b59b6",
      listeArrets: [
        "Almadies",
        "Ngor",
        "Yoff",
        "Ouest Foire",
        "Liberte 6",
        "Colobane",
      ],
    },
    {
      id: 6,
      numero: "12",
      depart: "Yoff",
      arrivee: "Sandaga",
      arrets: 11,
      couleur: "#1abc9c",
      listeArrets: [
        "Yoff Village",
        "Aeroport LSS",
        "Parcelles U17",
        "Grand Yoff",
        "HLM",
        "Sandaga",
      ],
    },
    {
      id: 7,
      numero: "31",
      depart: "Fann",
      arrivee: "Medina",
      arrets: 9,
      couleur: "#e67e22",
      listeArrets: [
        "Fann Residence",
        "Point E",
        "Amitie",
        "Liberté 3",
        "Liberté 5",
        "HLM",
        "Dieuppeul",
        "Tilene",
        "Medina",
      ],
    },
    {
      id: 8,
      numero: "42",
      depart: "Sicap Liberte",
      arrivee: "Sandaga",
      arrets: 11,
      couleur: "#c0392b",
      listeArrets: [
        "Sicap Liberte 1",
        "Sicap Liberte 4",
        "Dieuppeul",
        "HLM Grand Yoff",
        "Liberté 6",
        "Castor",
        "Colobane",
        "Kermel",
        "Sandaga",
      ],
    },
    {
      id: 9,
      numero: "18",
      depart: "HLM",
      arrivee: "Plateau",
      arrets: 8,
      couleur: "#8e44ad",
      listeArrets: [
        "HLM 1",
        "HLM 5",
        "Dieuppeul",
        "Fass",
        "Colobane",
        "Kermel",
        "Ponty",
        "Plateau",
      ],
    },
    {
      id: 10,
      numero: "27",
      depart: "Sicap Mermoz",
      arrivee: "Colobane",
      arrets: 10,
      couleur: "#16a085",
      listeArrets: [
        "Sicap Mermoz",
        "Ouakam",
        "Mermoz",
        "Fann",
        "Point E",
        "Amitie",
        "Liberté 5",
        "Castor",
        "Fass",
        "Colobane",
      ],
    },
  ];

  const lignesFiltrees = lignes.filter(
    (l) =>
      l.depart.toLowerCase().includes(recherche.toLowerCase()) ||
      l.arrivee.toLowerCase().includes(recherche.toLowerCase()) ||
      l.numero.includes(recherche),
  );

  function handleClickLigne(ligne) {
    if (ligneSelectionnee && ligneSelectionnee.id === ligne.id) {
      setLigneSelectionnee(null);
    } else {
      setLigneSelectionnee(ligne);
    }
  }

  return (
    <div className="App">
      <Header />
      <main className="contenu">
        <Recherche
          valeur={recherche}
          onChange={(valeur) => {
            setRecherche(valeur);
          }}
          onSearch={() => {
            if (recherche !== "") {
              setNombreRecherches(nombreRecherches + 1);
            }
          }}
        />
        <p className="compteur-recherche">
          Vous avez effectué {nombreRecherches} recherche(s)
        </p>
        <p className="resultat-recherche">
          {lignesFiltrees.length} ligne{lignesFiltrees.length > 1 ? "s" : ""}{" "}
          trouvée{lignesFiltrees.length > 1 ? "s" : ""}
        </p>

        {lignesFiltrees.length === 0 ? (
          <p className="aucune-ligne">Aucune ligne trouvée</p>
        ) : (
          lignesFiltrees.map((ligne) => (
            <div key={ligne.id}>
              <LigneBus
                numero={ligne.numero}
                depart={ligne.depart}
                arrivee={ligne.arrivee}
                arrets={ligne.arrets}
                couleur={ligne.couleur}
                estSelectionnee={
                  ligneSelectionnee && ligneSelectionnee.id === ligne.id
                }
                onClick={() => handleClickLigne(ligne)}
              />
              {ligneSelectionnee && ligneSelectionnee.id === ligne.id && (
                <DetailLigne ligne={ligne} />
              )}
            </div>
          ))
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
