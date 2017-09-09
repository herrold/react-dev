import * as i18n from 'i18next';
// import * as XHR from 'i18next-xhr-backend';
// import * as LanguageDetector from 'i18next-browser-languagedetector';
import * as SyncBackend from 'i18next-sync-fs-backend';

const instance: i18n.i18n = i18n
    .use(SyncBackend)
    .init({
        initImmediate: false,
        backend: {
            loadPath: 'public/locales/{{lng}}.json'
        },
        fallbackLng: 'en',

        react: {
            // globally set to wait for loaded translations in translate HOC
            // The "translate HOC(Higher Order Component" is the component that we call to wrap
            // any component that needs translation.  An example is here:
            //      export default translate()(Why5calls);(See /Src/Components/Home/Why5Calls.tsx)
            wait: true,
        },

        ns: [''],
        defaultNS: '',

        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ','
        }
    });

export default instance;
