import webpack from "webpack";

export default {
  modules: [
    "@chakra-ui/nuxt",
    "@nuxtjs/emotion",
    "nuxt-i18n",
    "cookie-universal-nuxt",
    "vue-scrollto/nuxt"
  ],
  i18n: {
    currency: "USD",
    country: "US",
    countries: [
      { name: "US", label: "United States" },
      { name: "AT", label: "Austria" },
      { name: "DE", label: "Germany" },
      { name: "NL", label: "Netherlands" }
    ],
    currencies: [
      { name: "EUR", label: "Euro" },
      { name: "USD", label: "Dollar" }
    ],
    locales: [
      {
        code: "en",
        label: "English",
        file: "en.js",
        iso: "en"
      },
      {
        code: "de",
        label: "German",
        file: "de.js",
        iso: "de"
      }
    ],
    defaultLocale: "en",
    lazy: true,
    seo: true,
    langDir: "lang/",
    vueI18n: {
      fallbackLocale: "en",
      numberFormats: {
        en: {
          currency: {
            style: "currency",
            currency: "USD",
            currencyDisplay: "symbol"
          }
        },
        de: {
          currency: {
            style: "currency",
            currency: "EUR",
            currencyDisplay: "symbol"
          }
        }
      }
    },
    detectBrowserLanguage: {
      cookieKey: "vsf-locale"
    }
  },
  components: true
};
