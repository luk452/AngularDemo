import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: any[];
  private url = "https://jsonplaceholder.typicode.com/posts";
  // private url = 'http://local.srsoft.com:5000/api/promos';

  constructor(private http: Http) {
    // http.get returns Observable<Response>. It means that it's async. Observable has method subscribe. Define subscription function.
    http.get(this.url).subscribe(response => {
      this.posts = response.json();
    });
  }

  createPost(input: HTMLInputElement) {
    let postObj = {
      title: input.value
    };
    input.value = "";

    this.http.post(this.url, JSON.stringify(postObj)).subscribe(response => {
      postObj["id"] = response.json().id;
      this.posts.splice(0, 0, postObj);
      console.log(response.json());
    });
  }

  updatePost(input) {
    // this.http.patch - update only a few properties
    // this.http.put - send whole object
    
    this.http.patch(this.url + '/' + input.id, JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response.json());
      });
    //this.http.put(this.url, JSON.stringify(input));
  }

  ngOnInit() {}
}
