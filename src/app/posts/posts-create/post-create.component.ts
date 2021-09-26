import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from '../post.model';

import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredTitle = '';
  enteredContent = '';
  private mode = 'create'
  private postId: string
  isLoading = false
  post: Post

  constructor(public postsService: PostsService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paraMap: ParamMap) => {
      if (paraMap.has('postId')) {
        this.mode = 'edit'
        this.postId = paraMap.get('postId')
        this.isLoading = true
        this.postsService.getPost(this.postId).subscribe(postData => {
          this.isLoading = false
          this.post = { id: postData._id, title: postData.title, content: postData.content }
        })
      } else {
        this.mode = 'create'
        this.postId = null
      }
    })
  }

  onSavePost(form: NgForm) {
    if (form.invalid) {
      return
    }

    this.isLoading = true
    if (this.mode === "create") {
      this.postsService.addPosts(form.value.title, form.value.content)
    } else {
      this.postsService.updatePost(this.post.id, form.value.title, form.value.content)
    }


    form.resetForm()
  }
}
