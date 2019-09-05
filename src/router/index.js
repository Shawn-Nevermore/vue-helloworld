import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import HelloEarth from '../components/HelloEarth'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name: 'helloworld',
            path: '/helloworld/:msg',
            component: HelloWorld
        },
        {
            name: 'helloearth',
            path: '/helloearth',
            component: HelloEarth
        }
    ]
})
