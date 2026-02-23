import { Component, input } from '@angular/core';
import { PostComment } from '../Interfaces/comment.interface';

@Component({
  selector: 'app-comment-card',
  standalone: true,
  templateUrl: './comment-card.html',
  styleUrl: './comment-card.scss',
})
export class CommentCard {
  comment = input.required<PostComment>();
}
