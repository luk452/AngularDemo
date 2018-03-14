import { PostService } from './../services/post.service';
import { Component, OnInit } from "@angular/core";

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
    observableResponse.subscribe(response => {
      this.posts = response.json();
    });
  }

  createPost(input: HTMLInputElement) {
    let postObj = {
      title: input.value
    };
    input.value = "";

    let observableResponse = this.service.createPost(postObj);
    observableResponse.subscribe(response => {
      postObj["id"] = response.json().id;
      this.posts.splice(0, 0, postObj);
      console.log(response.json());
    });
  }

  updatePost(input: HTMLInputElement) {
    this.service.updatePost(input)
      .subscribe(response => {
        console.log(response.json());
      });
  }

  deletePost(input: HTMLInputElement) {
    this.service.deletePost(input.id)
      .subscribe(response => {
        let index = this.posts.indexOf(input);
        this.posts.splice(index, 1);
      });
  }
}
