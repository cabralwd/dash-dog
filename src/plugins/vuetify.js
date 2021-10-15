import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#2f80cf",
        secondary: "#4ed298",
        tertiary: "#0C2239",
        contrast: "#f4cb36",
      },
    },
  },
  icons: {
    iconfont: "mdi",
  },
});
