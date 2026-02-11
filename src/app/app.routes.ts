import { Routes } from '@angular/router';
import { Posts } from './Modules/Posts/Pages/posts/posts';
import { Home } from './Modules/Home/home/home';
import { PostComments } from './Modules/Comments/Pages/comment/PostComments';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'posts',
    component: Posts,
  },
  {
    path: 'posts/:id/comments',
    component: PostComments
  },
];
