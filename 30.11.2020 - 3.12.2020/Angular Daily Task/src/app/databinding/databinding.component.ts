import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  stringInterpolation = "This is an example of String interpolation";

  dataOnClick = "Before entering data";

  dataEntry = "";

  buttonclick = false;

  nameData = "";

  constructor() { }

  ngOnInit(): void {
  }
  
  onDataEntry(event){
    this.dataEntry = event.target.value;
    this.buttonclick = !this.buttonclick;
  }
  onClick(){
    this.dataOnClick = this.dataEntry
  }

}
