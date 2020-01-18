import Vue from 'vue';
import Vuetify from "vuetify";
import colors from "vuetify/lib/util/colors";
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                background: colors.blueGrey.darken2
            }
        },
        options: {
            minifyTheme: function (css) {
                return process.env.NODE_ENV === 'production'
                    ? css.replace(/[\r\n|\r|\n]/g, '')
                    : css
            },
        },
    },
    icons: {
        iconfont: 'mdi'
    }
});