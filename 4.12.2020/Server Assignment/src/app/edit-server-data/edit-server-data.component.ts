import { Component, OnInit } from '@angular/core';
import { ServerDataService } from 'src/services/server-data.service';

@Component({
  selector: 'app-edit-server-data',
  templateUrl: './edit-server-data.component.html',
  styleUrls: ['./edit-server-data.component.css']
})
export class EditServerDataComponent implements OnInit {

  serverEditData;
  serverStatusList
  constructor(private serverData: ServerDataService) { }

  ngOnInit(): void {
    this.serverEditData = this.serverData.editData;
    this.serverStatusList = this.serverData.serversStatus;
  }

  updateServerData(serverEditData) {
    this.serverData.updateData(serverEditData)
  }
}
