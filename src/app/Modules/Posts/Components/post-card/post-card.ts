import { Component, inject, input } from '@angular/core';
import { Post } from '../../Interfaces/post.interface';
import { PostsService } from '../../Services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-card',
  imports: [],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss',
})
export class PostCard {
  public post = input<Post>();
  private readonly router = inject(Router);

  navigateToComments() {
    const postId = this.post()?.id;
    if (postId){
      this.router.navigate(['/posts', postId, 'comments']);
    }    
  }
}
