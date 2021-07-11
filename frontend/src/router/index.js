/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '@/views/MainView.vue';
import LoginView from '@/views/LoginView.vue';
import PostView from '@/views/PostView.vue';
import AccountView from '@/views/AccountView.vue';
import ChatView from '@/views/ChatView.vue';
import TestView from '@/views/TestView.vue';
import store from '@/store';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { 
            path: '/', 
            name: 'main', 
            component: MainView,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            meta: {
                hasHeaderNav: false,
            },
        },
        {
            path: '/post/:id', 
            component: PostView,
        },
        {
            path: '/account',
            name: 'account',
            component: AccountView,
            meta: {
                requireLogin: true,
            }
        },
        {
            path: '/message',
            name: 'message',
            component: ChatView,
            meta: {
                requireLogin: true,
            }
        },
        { 
            path: '/test', 
            name: 'test', 
            component: TestView,
            meta: {
                hasHeaderNav: false,
            } 
        },
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireLogin)) {
        if (!store.getters.isLogined) {
            next({
                path: '/login',
                redirect: to.path,
            });
            return;
        }
    }

    next();
});

export default router;