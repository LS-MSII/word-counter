import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {Main} from "./service/Main";

createApp(App).mount('#app')

Main.main()

