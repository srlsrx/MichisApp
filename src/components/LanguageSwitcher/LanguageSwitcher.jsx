import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = () => {
        const newLang = i18n.language === "es" ? "en" : "es";
        i18n.changeLanguage(newLang);
    };

    return (
        <button onClick={changeLanguage} className="cursor-pointer ring-1 bg-[#4FC560] ring-white dark:ring-gray-900 px-2 py-1 rounded-lg absolute top-25 right-1">
            {i18n.language === "es" ? "🇬🇧English" : "🇪🇸Español"}
        </button>
    );
}

export default LanguageSwitcher;
