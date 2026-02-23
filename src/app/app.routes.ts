import { Routes } from '@angular/router';
import { Home } from './Modules/Home/home/home';
import { PostComments } from './Modules/Comments/Pages/comment/PostComments';
import { Posts } from './Modules/Posts/Pages/list-posts/list-posts';
import { CreatePost } from './Modules/Posts/Pages/create-post/create-post';
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
    path: 'posts/create',
    component: CreatePost
  },
  {
    path: 'posts/:id/comments',
    component: PostComments,
  },
];
