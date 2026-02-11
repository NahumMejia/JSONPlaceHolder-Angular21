import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PostCard } from '../../Components/post-card/post-card';
import { PostsService } from '../../Services/posts.service';
import { Post } from '../../Interfaces/post.interface';
import { Loader } from "../../../Core/Components/loader/loader";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  imports: [PostCard, Loader],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})
export class Posts implements OnInit, OnDestroy {
  private readonly postService = inject(PostsService);
  public posts = signal<Post[]>([]);
  public isLoading = signal(true);
  private subscription?: Subscription;

  ngOnInit() {
    this.subscription = this.postService.getAllPosts().subscribe({
      next: (posts) => {
        this.isLoading.set(false);
        this.posts.set(posts);
      },
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
