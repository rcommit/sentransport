import LigneBus from "./LigneBus";
import "./ListeLignes.css";
import StatReseau from "./StatReseau";

function ListeLignes({ lignes }) {
  return (
    <div className="liste-lignes">
      <h2 className="liste-titre">Lignes Dakar Dem Dikk</h2>

      <p className="liste-description">{lignes.length} lignes disponibles</p>
      <StatReseau lignes={lignes} />
      {lignes.map((ligne) => (
        <LigneBus
          key={ligne.id}
          numero={ligne.numero}
          depart={ligne.depart}
          arrivee={ligne.arrivee}
          arrets={ligne.arrets}
          couleur={ligne.couleur}
        />
      ))}
    </div>
  );
}

export default ListeLignes;
