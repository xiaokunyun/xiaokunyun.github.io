import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  // something vue-i18n options here ...
});
const messages = {
  en: {
    message: {
      hello: '{0} world',
    },
  },
};
export default i18n;
