import { useState } from "react";
import { changeLanguage } from "../i18n";
import ThaiIcon from "../assets/thaiicon.png";
import EngIcon from "../assets/engicon.png";
function LanguageToggle() {
  const [isEng, setIsEng] = useState(true);

  const handleClick = () => {
    setIsEng((eng) => !eng);
    changeLanguage(isEng ? "th" : "en"); // Change the language based on the current state
  };

  return (
    <button
      className="hover:text-[#6ABD65] hover:bg-gray-100 px-4 py-4 rounded-sm transition-all duration-300"
      onClick={handleClick}
    >
      {isEng ? (
        <img src={EngIcon} className="w-9" />
      ) : (
        <img src={ThaiIcon} className="w-9" />
      )}
    </button>
  );
}

export default LanguageToggle;
