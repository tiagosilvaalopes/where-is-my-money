import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

const app = createApp(App)

// app.directive('click-outside', {
//   bind: function (el, binding, vnode) {
//     this.event = function (event) {
//       if (!(el == event.target || el.contains(event.target))) {
//         vnode.context[binding.expression](event)
//       }
//     }
//     document.body.addEventListener('click', this.event)
//   }
// })

app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
