import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

window.toggleDrw = function () {
  let $doc = document.body;
  let isOpen = $doc.style.getPropertyValue("--drw-open");
  if (isOpen) {
    $doc.style.removeProperty("--drw-open");
  } else {
    $doc.style.setProperty("--drw-open", "1");
  }
}
window.toggleGrid = function (checked) {
  if (checked) {
    document.body.classList.add("show-grid");
  } else {
    document.body.classList.remove("show-grid");
  }
}
window.togglePadding = function (checked) {
  if (checked) {
    document.body.classList.add("show-padding");
  } else {
    document.body.classList.remove("show-padding");
  }
}
window.toggleTheme = function (checked) {
  if (checked) {
    document.documentElement.removeAttribute("light");
    document.documentElement.setAttribute("dark", "");
  } else {
    document.documentElement.removeAttribute("dark");
    document.documentElement.setAttribute("light", "");
  }
}
window.toggleDir = function (checked) {
  if (checked) {
    document.documentElement.removeAttribute("ltr");
    document.documentElement.setAttribute("rtl", "");
  } else {
    document.documentElement.removeAttribute("rtl");
    document.documentElement.setAttribute("ltr", "");
  }
}