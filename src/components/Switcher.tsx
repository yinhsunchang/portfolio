import { useTranslation } from "react-i18next";

function Switcher() {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
    <div style={{ position: "fixed", bottom: 10, right: 10, zIndex: 1000 }}>
    <button className="button light-grey" onClick={() => changeLanguage("en")}>EN</button>
    <button className="button light-grey" onClick={() => changeLanguage("fr")}>FR</button>
    </div>
    </>
  );
}

export default Switcher
