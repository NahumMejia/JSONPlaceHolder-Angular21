import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PostCard } from '../../Components/post-card/post-card';
import { PostsService } from '../../Services/posts.service';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { Post } from '../../Interfaces/post.interface';
import { Loader } from '../../../Core/Components/loader/loader';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  imports: [PostCard, Loader, ButtonModule, ToastModule],
  templateUrl: './list-posts.html',
  styleUrl: './list-posts.scss',
})
export class Posts implements OnInit, OnDestroy {
  private readonly postService = inject(PostsService);
  private readonly router = inject(Router);
  public posts = signal<Post[]>([]);
  public isLoading = signal(true);
  private subscription?: Subscription;

  public ngOnInit(): void {
    this.subscription = this.postService.getAllPosts().subscribe({
      next: (posts) => {
        this.isLoading.set(false);
        this.posts.set(posts);
      },
    });
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public navigateToPost(): void {
    this.router.navigate(['/posts/create']);
  }
}
