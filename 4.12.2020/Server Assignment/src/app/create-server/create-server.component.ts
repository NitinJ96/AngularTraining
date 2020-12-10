import { isFormattedError } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ServerDataService } from 'src/services/server-data.service';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent implements OnInit {

  type: string;
  name: string;
  status: string;
  serverTypeList = [];
  serverStatusList = [];
  constructor(private serverData: ServerDataService) { }

  ngOnInit(): void {
    this.serverTypeList = this.serverData.serversType;
    this.serverStatusList = this.serverData.serversStatus;
  }

  addServerData(formData){
    this.serverData.addDataToServer(formData);
  }

}
