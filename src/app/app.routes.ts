import { Routes } from '@angular/router';
import { Posts } from './Modules/Posts/Pages/posts/posts';
import { Home } from './Modules/Home/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'posts',
        component: Posts,
    },
];
