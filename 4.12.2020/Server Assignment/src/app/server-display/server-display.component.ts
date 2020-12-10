import { Component, OnInit } from '@angular/core';
import { ServerDataService } from 'src/services/server-data.service';

@Component({
  selector: 'app-server-display',
  templateUrl: './server-display.component.html',
  styleUrls: ['./server-display.component.css']
})
export class ServerDisplayComponent implements OnInit {

  type;
  serverType;
  servers;
  displayServers= [];
  displayByType = false;
  edit = false;
  editServerData;
  constructor(private serverData: ServerDataService) { }

  ngOnInit(): void {
    this.serverType = this.serverData.serversType
    this.servers = this.serverData.servers
  }

  setType(type){
    this.type = type;
    this.setServers(type);
    this.displayByType= true;
  }

  setServers(type){
    this.displayServers.splice(0)
    for (const server of this.servers) {
      if(server.type === type){
        this.displayServers.push(server)
      }
    }
  }


  editData(data){
    this.edit=true;
    this.serverData.editServerData(data)
  }
}
