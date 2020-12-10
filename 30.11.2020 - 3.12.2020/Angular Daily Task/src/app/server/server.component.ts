import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  servers = [];

  constructor() { }

  ngOnInit(): void {
  }

  onAddTestServer(event){
    console.log(event)
    this.servers.push(event);
  }

  onAddDevelopmentServer(event){
    this.servers.push(event)
  }

}
