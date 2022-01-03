import { defineNuxtPlugin } from '#app'
import {AppBar} from '@varlet/ui'
import '@varlet/ui/es/app-bar/style'
export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp
    nuxtApp.vueApp.use(AppBar)
})
