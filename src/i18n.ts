import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `/MagicWorld/locales/{{lng}}/{{ns}}.json`
    }
  });

export default i18n;



// i18n.js
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';

// i18n
//   .use(Backend)
//   .use(initReactI18next)
//   .init({
//     debug: true,
//     fallbackLng: 'en',
//     interpolation: {
//       escapeValue: false,
//     },
//     backend: {
//       loadPath: '/locales/{{lng}}/{{ns}}.json',
//     },
//   });

// export default i18n;


// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';

// i18n
//   .use(Backend)
//   .use(initReactI18next)
//   .init({
//     debug: true,
//     fallbackLng: 'en',
//     interpolation: {
//       escapeValue: false,
//     },
//     backend: {
//       addPath: '/locales/en/translation.json',
//       loadPath: '/locales/en/translation.json', // Укажите путь к вашему файлу translation.json
//     },
//   });

// export default i18n;

// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';
// i18n
//   .use(Backend)
//   .use(initReactI18next)
//   .init({
//     debug: true,
//     fallbackLng: 'en',
//   });
// export default i18n;

// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

// i18n
//    .use(Backend)
//    .use(LanguageDetector)
//    .use(initReactI18next)
//    .init({
//       fallbackLng: false,
//       debug: true,

//       interpolation: {
//          escapeValue: false,
//       },
//       backend: {
//           loadPath: 'locales/{{lng}}/{{ns}}.json'
//       },
//    });


// export default i18n;