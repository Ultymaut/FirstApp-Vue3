import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//import for vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from "vuetify/lib/iconsets/mdi";
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount } from '@mdi/js'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
// import '@fortawesome/fontawesome-free/css/all.css'
import "./assets/main.css";

export default {
	name: "my-cool-component",

	components: {
		SvgIcon
	},

  	data() {
		return {
			path: mdiAccount,
	  	}
  	}
}

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi
        }
    },
})

const app = createApp(App)

//app.use for vuetify
app.use(vuetify);

app.use(router);
app.mount('#app')

