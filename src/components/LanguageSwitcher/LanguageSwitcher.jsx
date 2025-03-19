import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = () => {
        const newLang = i18n.language === "es" ? "en" : "es";
        i18n.changeLanguage(newLang);
    };

    return (
        <button onClick={changeLanguage} className="cursor-pointer ring-1 bg-[#4FC560] ring-white dark:ring-gray-900 px-2 py-2 text-4xl rounded-lg absolute top-25 right-1">
            <Flag code={i18n.language === "es" ? "gb" : "es"} style={{ width: "30px", height: "20px" }} />
        </button>
    );
}

export default LanguageSwitcher;
