import { Component, input } from '@angular/core';
import { Card } from "primeng/card";
import { Post } from '../../Interfaces/post.interface';

@Component({
  selector: 'app-post-card',
  imports: [Card],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss',
})
export class PostCard {
  public post = input<Post>()
}
