import { useTranslation } from "react-i18next";
import { changeLanguage } from "../i18n";

const DogPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>{t("title")}</h1>
      <button onClick={() => changeLanguage("th")}>Switch to Thai</button>
      <br />
      <br />
      <br />
      <button onClick={() => changeLanguage("en")}>Switch to English</button>
    </div>
  );
};

export default DogPage;
