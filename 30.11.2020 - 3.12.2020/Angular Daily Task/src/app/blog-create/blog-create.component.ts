import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  fullName='';
  email='';
  title='';
  content='';

  @Output() createBlogPost = new EventEmitter<{name: string, email: string, title: string, content: string}>(); 

  constructor() { }

  ngOnInit(): void {
  }

  onAddBlogData(){
    this.createBlogPost.emit({
      name: this.fullName,
      email: this.email,
      title: this.title,
      content: this.content
    })
  }

}
