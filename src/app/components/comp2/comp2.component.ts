import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit{

  constructor(private dataservice: DataService){}

  inputText!:string;

  ngOnInit(): void {
    this.dataservice.dataEmitter.subscribe((value) => {
      this.inputText = value
    })
  }
}
