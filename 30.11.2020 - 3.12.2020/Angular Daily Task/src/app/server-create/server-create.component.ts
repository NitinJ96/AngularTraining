import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-server-create',
  templateUrl: './server-create.component.html',
  styleUrls: ['./server-create.component.css']
})
export class ServerCreateComponent implements OnInit {

  name = ''
  content = ''
  @Output() testServerCreated = new EventEmitter<{ type: string,serverName: string ,serverContent: string}>();
  @Output() developmentServerCreated = new EventEmitter<{ type: string,serverName: string ,serverContent: string}>();
  constructor() {}

  ngOnInit(): void {
  }

  createTestServer(){
    this.testServerCreated.emit({
      type: 'Test',
      serverName: this.name,
      serverContent: this.content
    })
  }

  createDevelopmentServer(){
    this.developmentServerCreated.emit({
      type: 'Development',
      serverName: this.name,
      serverContent: this.content
    })
  }


}
