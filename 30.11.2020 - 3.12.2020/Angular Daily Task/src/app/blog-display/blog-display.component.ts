import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-display',
  templateUrl: './blog-display.component.html',
  styleUrls: ['./blog-display.component.css']
})
export class BlogDisplayComponent implements OnInit {

  @Input() blogPost: {name: string, email: string, title: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
