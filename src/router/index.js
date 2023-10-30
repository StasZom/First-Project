import {createRouter, createWebHistory} from 'vue-router'
import MainPage from '../view/MainPageView.vue'
import Chat from '../view/ProductsView.vue'
import SignUp from '../view/SignUpView.vue'
import SignIn from '../view/SignInView.vue'

const router = createRouter({
    routes: [
        {
            path: '/',
            component: MainPage,
            name: 'MainPage'

    },
    {
        path: '/chat',
        component: Chat,
        name: 'Chat'
    },
    {
        path: '/signIn',
        component: SignIn,
        name: 'SignIn'
    },
    {
        path: '/signUp',
        component: SignUp,
        name: 'SignUp'
    }

],

    history: createWebHistory(),

});


export default router;