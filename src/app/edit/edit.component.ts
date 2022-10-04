import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PostController} from "../../services/post.controller";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  postForm: FormGroup;

  constructor(private postController: PostController,
              private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute) {
    const id: number = route.snapshot.queryParams['id'];
    this.postForm = formBuilder.group(
      {
        id: new FormControl('', [Validators.required]),
        title: new FormControl('', [Validators.required]),
        content: new FormControl('', [Validators.required])
      }
    );
    this.postController.getPostById(id).subscribe(res => {
        this.postForm.get('id')?.setValue(res['id']);
        this.postForm.get('title')?.setValue(res['title']);
        this.postForm.get('content')?.setValue(res['content']);
      }
    )

  }

  ngOnInit(): void {
  }

  editPost() {
    const title: string = this.postForm.get('title')?.value;
    const content: string = this.postForm.get('content')?.value;
    this.postController.updatePost(this.postForm.get('id')?.value, title, content).subscribe(() =>
      this.router.navigate(['/'])
    );
  }
}
