import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
  <div className="padding-32 content text-grey justify" id="contact">
    <h2 className="text-dark-grey">{t("contact.title")}</h2>
    <hr className="opacity" />
    
    <div className="section">
      <p><i className="fa fa-map-marker fa-fw xlarge margin-right"></i> {" "}{t("contact.address")}</p>
      <p><i className="fa fa-phone fa-fw xlarge margin-right"></i> {" "}{t("contact.phone")}</p>
      <p><i className="fa fa-envelope fa-fw xlarge margin-right"> </i> {" "}{t("contact.email")}</p>
    </div>
  </div>
  );
}

export default Contact
