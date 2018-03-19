import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { PostService } from "./../services/post.service";
import { Component, OnInit } from "@angular/core";
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}
  ngOnInit() {
    // one of the lifecycle hooks
    // http.get returns Observable<Response>. It means that it's async. Observable has method subscribe. Define subscription function.
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    let postObj = { title: input.value };
    this.posts.splice(0, 0, postObj); // optimistic update

    input.value = "";

    this.service.create(postObj)
      .subscribe(
        newPost => {
          postObj["id"] = newPost.id;
          console.log(newPost);
        },
        (error: AppError) => {
          this.posts.splice(0, 1); // delete if fail

          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          } else {
            throw error;
          }
        }
      );
  }

  updatePost(input: HTMLInputElement) {
    this.service.update(input).subscribe(
      updatedPost => {
        console.log(updatedPost);
      });
  }

  deletePost(input: HTMLInputElement) {
    let index = this.posts.indexOf(input);
    this.posts.splice(index, 1); // optimistic update
    
    this.service.delete(input.id).subscribe(
      null,
      (error: AppError) => {
        this.posts.splice(index, 0, input); // rollback of optimistic update
        if (error instanceof NotFoundError)
          alert("This post has already been deleted.");
        else {
          throw error; // it will be captured by global error handler
        }
      }
    );
  }
}
