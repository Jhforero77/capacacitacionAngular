import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wo-app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  posts;

  bachendUrl : string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.http.get(this.bachendUrl).subscribe( (data) => {
      this.posts = data;
    });
  }

  crearPost(titulo : HTMLElement){
    let pst = { title : titulo};
    this.http.post(this.bachendUrl, pst).subscribe( (result) => {
      console.log(result);
    });
  }

  actualizarPost(post : any){
    this.http.put(`${this.bachendUrl}/${post.id}`, post).subscribe( (data) => {
      console.log(data);
    })
  }

  borrarPost(post : any){
    this.http.delete(`${this.bachendUrl}/${post.id}`, post).subscribe( (data) => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

}
