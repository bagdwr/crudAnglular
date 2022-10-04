import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostController} from "../../services/post.controller";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private postController: PostController,
              private router: Router) {
    this.postForm = new FormGroup(
      {
        title: new FormControl('', [Validators.required]),
        content: new FormControl('', [Validators.required])
      }
    );
  }

  ngOnInit(): void {
  }

  createPost() {
    const title: string = this.postForm.get('title')?.value;
    const content: string = this.postForm.get('content')?.value;
    this.postController.createPost(title, content).subscribe(() =>
      this.router.navigate(['/'])
    );
  }
}
