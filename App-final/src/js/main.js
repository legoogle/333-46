// import npm modules
import Vue from 'vue';

import Home from './components/Home';

import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)

const app = new Vue({
    el: '#app',
    data: {
         show: true,
         isActive: false,
        message: 'Hello Vue! Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue'
    }
});

//new Vue({
//  el: "#",
//  data: {
//
//  }
//})

function myFunction() {
    alert("Hello! I am an alert box!");
}
