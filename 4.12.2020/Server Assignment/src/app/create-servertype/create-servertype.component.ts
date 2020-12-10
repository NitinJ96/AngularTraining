import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServerDataService } from 'src/services/server-data.service';

@Component({
  selector: 'app-create-servertype',
  templateUrl: './create-servertype.component.html',
  styleUrls: ['./create-servertype.component.css']
})
export class CreateServertypeComponent implements OnInit {

  @ViewChild('type') type: ElementRef;
  constructor(private serverData: ServerDataService) { }

  ngOnInit(): void {
  }

  addNewServerType(type){
    this.serverData.addServerType(type);
    this.type.nativeElement.value = ''
  }

}
