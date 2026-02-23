import { Component, inject } from '@angular/core';
import { craftState } from '@irv-labs/ngx-state-crafter';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CardModule } from 'primeng/card';
import { RouterLink, Router } from '@angular/router';
import { PostsService } from '../../Services/posts.service';
import { MessageService } from 'primeng/api';

interface PostState {
  title: string;
  body: string;
  userId: number;
  loading: boolean;
}

@Component({
  selector: 'app-create-post',
  imports: [ButtonModule, InputTextModule, TextareaModule, CardModule, RouterLink],
  templateUrl: './create-post.html',
  styleUrl: './create-post.scss',
})
export class CreatePost {
  private postsService = inject(PostsService);
  private router = inject(Router);
  private messageService = inject(MessageService);

  public state = craftState<PostState>({
    title: '',
    body: '',
    userId: 1,
    loading: false,
  });

  public title = this.state.select('title');
  public body = this.state.select('body');
  public loading = this.state.select('loading');

  public isValid = this.state.computed(
    (post) => post.title.trim().length > 0 && post.body.trim().length > 0,
  );

  setTitle(value: string) {
    this.state.update({ title: value });
  }

  setBody(value: string) {
    this.state.update({ body: value });
  }

  submit() {
    const { title, body, userId } = this.state.snapshot();
    this.state.update({ loading: true });

    this.postsService.createPost({ title, body, userId }).subscribe({
      next: () => {
        this.state.update({ loading: false });
        this.router.navigate(['/posts']).then(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Post created!',
            life: 1000,
          });
        });
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong. Please try again.',
          life: 1000,
        });
        this.state.update({ loading: false });
      },
    });
  }
}
