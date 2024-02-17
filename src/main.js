import { createApp } from 'vue'
import App from './views/App.vue'
import '/src/assets/style.css'
import router from './components/routers/index.js'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons'
import Carousel3d from 'vue-carousel-3d';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import {provideEventBus} from "@/EventBus.js";

library.add(fas)
library.add(faMapLocationDot)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.use(Carousel3d);
app.use(provideEventBus)
app.mount('#app')