import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  return (
  <div className="content justify text-grey padding-32" id="about">
    <h2 className="text-dark-grey">{t("about.title")}</h2>
    <hr className="opacity" />
    <p>{t("about.text1")}</p>
    <p>{t("about.text2")}</p>
    
    <h2 className="padding-top-64 text-dark-grey">{t("about.skills.title")}</h2>
    <hr className="opacity" />
    <p>{t("about.skills.frontend")}</p>
    <p>{t("about.skills.design")}</p>
    <p>{t("about.skills.language")}</p>
  </div>
  );
}

export default About
