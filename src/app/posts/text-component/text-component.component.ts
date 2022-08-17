import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {Post} from '../post.model'
import {NgForm} from "@angular/forms";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-text-component',
  templateUrl: './text-component.component.html',
  styleUrls: ['./text-component.component.css']
})
export class TextComponentComponent implements OnInit {

  enterContent = "";
  enterTitle = "";

  // @Output() postCreated = new EventEmitter<Post>();

  constructor(public postsService: PostsService) {
  }

  // newPost = '';

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // const post : Post= {
    //   title : form.value.title,
    //   content : form.value.content
    // };
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  };

  ngOnInit(): void {
  }

}
