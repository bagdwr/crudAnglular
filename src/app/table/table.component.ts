import {Component, OnInit} from '@angular/core';
import {PostController} from "../../services/post.controller";
import {Post} from "../model/post";
import {Router} from "@angular/router";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postController: PostController,
              private router: Router) {
    this.postController.loadAllPosts().subscribe(
      res => res.forEach(r => {
          this.posts.push(new Post(r['id'], r['title'], r['content']));
        }
      )
    );
  }

  ngOnInit(): void {
    console.log(this.posts);
  }

  edit(id: number) {
    this.router.navigate(['/edit'], {
      queryParams: {id: id}
    })
  }

  delete(id: number) {
    this.postController.deleteById(id).subscribe(res => {
        this.posts = [];
        res.forEach(r => {
          this.posts.push(new Post(r['id'], r['title'], r['content']));
        })
      }
    )
  }
}
