import { Component, inject, OnInit, signal } from '@angular/core';
import { PostCard } from '../../Components/post-card/post-card';
import { PostsService } from '../../Services/posts.service';
import { Post } from '../../Interfaces/post.interface';
import { Loader } from "../../../Core/Components/loader/loader";

@Component({
  selector: 'app-posts',
  imports: [PostCard, Loader],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})
export class Posts implements OnInit {
  private readonly postService = inject(PostsService);
  public posts = signal<Post[]>([]);
  public isLoading = signal(true);

  ngOnInit() {
    this.postService.getAllPosts().subscribe({
      next: (posts) => {
        this.posts.set(posts);
        this.isLoading.set(false);
      },
    });
  }
}
