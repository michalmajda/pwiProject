import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  pl: {
    translation: {
      "Home": "Strona główna",
      "Products": "Produkty",
      "Contact": "Kontakt",
      "Lang": "Język",
      "pl": "Polski",
      "en": "Angielski",
      "Label1": "Twoje meble - nasza pasja",
      "Text1": "100 lat doświadczenia w branży",
      "Label2": "Idealne do Twojego mieszkania",
      "Text2": "Zaprojektujemy i zamontujemy na wymiar",
      "Specials": "Nasze specjalności",
      "Contactus": "Napisz do nas", 
      "Name": "Imię",
      "Email": "Email",
      "Message": "Wiadomość",
      "Submit": "Wyślij",
      "Sending": "Wysyłanie..."
    }
  },
  en: {
    translation: {
      "Home": "Home",
      "Products": "Products",
      "Contact": "Contact us",
      "Lang": "Language",
      "pl": "Polish",
      "en": "English",
      "Label1": "Your furniture - our passion",
      "Text1": "100 years of experience in the industry",
      "Label2": "Perfect for your apartment",
      "Text2": "We will design and install custom furniture",
      "Specials": "Our specialties",
      "Contactus": "Contact us",
      "Name": "Name",
      "Email": "Email",
      "Message": "Message",
      "Submit": "Send",
      "Sending": "Sending..."
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "pl", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;