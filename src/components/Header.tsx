import { useTranslation } from "react-i18next";
import yinhsun from '../assets/yinhsun980.jpg';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="container center" style={{ padding: "128px 16px" }} id="home">
      <h1 className="xxxlarge"><b>Yin-Hsun Chang</b></h1>
      <p>{t("header.subtitle")}</p>
      
      <img
        src={yinhsun}
        className="image hide-large hide-small round"
        style={{ display: "block", width: "60%", margin: "auto" }}
        alt="profile"
      />
      <img
        src={yinhsun}
        className="image hide-large hide-medium round"
        width="1000"
        height="1333"
        alt="profile"
      />

      <button className="button light-grey padding-large margin-top">
      <a href={`${import.meta.env.BASE_URL}${t("header.resume")}`} download>
        <i className="fa fa-download"></i> {t("header.download")}
      </a>
      </button>
    </header>
  );
};

export default Header;
