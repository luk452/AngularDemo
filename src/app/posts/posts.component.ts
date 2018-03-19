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
    // on of the lifecycle hooks
    //http.get returns Observable<Response>. It means that it's async. Observable has method subscribe. Define subscription function.
    let observableResponse = this.service.getPosts(); // :Observable<Response>
    observableResponse.subscribe(
      response => {
        this.posts = response.json();
      }
      // we don't need this because we provided general AppErrorHandler
      // ,
      // error => {
      //   alert("An unexpected error occurred.");
      //   console.log(error);
      // }
    );
  }

  createPost(input: HTMLInputElement) {
    let postObj = {
      title: input.value
    };
    input.value = "";

    let observableResponse = this.service.createPost(postObj);
    observableResponse.subscribe(
      response => {
        postObj["id"] = response.json().id;
        this.posts.splice(0, 0, postObj);
        console.log(response.json());
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError);
        } else {
          throw error;
        }
      }
    );
  }

  updatePost(input: HTMLInputElement) {
    this.service.updatePost(input).subscribe(
      response => {
        console.log(response.json());
      });
  }

  deletePost(input: HTMLInputElement) {
    this.service.deletePost(input.id).subscribe(
      response => {
        let index = this.posts.indexOf(input);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        // It's not working !!! I don't know why.
        if (error instanceof NotFoundError)
          alert("This post has already been deleted.");
        else {
          throw error; // it will be captured by global error handler
        }
      }
    );
  }
}
