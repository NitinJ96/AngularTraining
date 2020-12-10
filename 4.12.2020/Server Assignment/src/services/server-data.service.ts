import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerDataService {
  
  constructor() { }

  servers: {type: string, name:string, status: string }[] = [];
  serversType = ["Development Server","Test Server", "Staging Server", "Production Server"];
  serversStatus = ["Active", "Inactive", "Unknown"]
  editData;

  addDataToServer(serverData){
    this.servers.push(serverData)
  }

  addServerType(type){
    this.serversType.push(type)
  }

  updateData(data){
    for (const server of this.servers) {
      if(data.type === server.type && data.name === server.name){
          server.status = data.status;
      }
    }
  }

  editServerData(data){
    this.editData = data
  }
}
