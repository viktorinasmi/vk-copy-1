import {Auth} from "../pages/auth";
import {Friends} from "../pages/friends";
import {Home} from "../pages/home";
import {Conversation} from "../pages/messages/Conversetion";
import {Messages} from "../pages/messages";
import {Profile} from "../pages/profile";

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        auth: true,
    },
    {
        path: '/profile/:id',
        exact: false,
        component: Profile,
        auth: true,
    },
    {
        path: '/messages',
        exact: true,
        component: Messages,
        auth: true,
    },
    {
        path: '/messages/:id',
        exact: false,
        component: Conversation,
        auth: true,
    },
    {
        path: '/friends/:id',
        exact: false,
        component: Friends,
        auth: true,
    },
    {
        path: '/auth',
        exact: true,
        component: Auth,
        auth: false,
    },
]
