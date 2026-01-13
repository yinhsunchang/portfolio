import { useTranslation } from "react-i18next";
import comingSoon from '../assets/coming-soon.jpg';
import catModel from '../assets/cat-model.jpg';


const Portfolio = () => {
  const { t } = useTranslation();

  return (
  <div className="padding-32 content justify text-grey" id="portfolio">
  <h2 className="text-dark-grey">{t("portfolio")}</h2>
  <hr className="opacity" />

  <p className="card zoom">
  <a href="https://yinhsunchang.github.io/coming-soon" target="_blank">
  <img src={comingSoon} alt="Preview" style={{width:'100%'}} />
  </a>
  <p style={{textAlign:"center"}}><span className="large margin-right"><b>{t("project.title1")}</b></span></p>
  <p style={{textAlign:"center"}}><span>{t("project.tech1")}</span></p>
  <p className="panel leftbar margin">{t("project.des1")}</p>
  <br />
  </p>

  <br />
  
  <p className="card zoom">
  <a href="https://yinhsunchang.github.io/cat-model" target="_blank">
  <img src={catModel} alt="Preview" style={{width:'100%'}} />
  </a>
  <p style={{textAlign:"center"}}><span className="large margin-right"><b>{t("project.title2")}</b></span></p>
  <p style={{textAlign:"center"}}><span>{t("project.tech2")}</span></p>
  <p className="panel leftbar margin">{t("project.des2")}</p>
  <br />
  </p>
  </div>
  );
}

export default Portfolio
