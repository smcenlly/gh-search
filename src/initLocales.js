import i18n from "i18next";
import resources from "./locales";
i18n.init({
    resources,
    keySeparator: "|",
    fallbackLng: "en-US"
});