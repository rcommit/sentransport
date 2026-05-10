import "./Header.css";

function Header() {
  const aujourdhui = new Date().toLocaleDateString("fr-FR");

  return (
    <header className="header">
      <h1 className="header-titre">SenTransport</h1>
      <p className="header-soustitre">
        Votre guide du transport en commun à Dakar
      </p>
      <p className="header-date">{aujourdhui}</p>
    </header>
  );
}

export default Header;
