import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentCard } from '../../Components/comment-card/comment-card';
import { Loader } from '../../../Core/Components/loader/loader';
import { PostsService } from '../../../Posts/Services/posts.service';
import { PostCard } from "../../../Posts/Components/post-card/post-card";
import { PostComment } from '../../Interfaces/comment.interface';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [Loader, CommentCard],
  templateUrl: './PostComments.html',
  styleUrl: './PostComments.scss',
})
export class PostComments implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly postsService = inject(PostsService);

  public comments = signal<PostComment[]>([]);
  public isLoading = signal(true);
  public postId = signal<number>(0);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postId.set(id);
    this.loadComments(id);
  }

  loadComments(postId: number) {
    this.isLoading.set(true);

    this.postsService.getCommentsByPost(postId).subscribe({
      next: (comments) => {
        this.comments.set(comments);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error al cargar comentarios:', err);
        this.isLoading.set(false);
      },
    });
  }
}
