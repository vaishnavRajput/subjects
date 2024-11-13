import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  title = 'subjects';

  constructor(private dataService: DataService){}

  counterObservable =  interval(1000)

  counterSub;

  ngOnInit(): void {
  //  this.counterSub = this.counterObservable.subscribe((val) => {
  //     console.log(val)
  //   })
  }

  unsubscribe(){
    this.counterSub.unsubscribe()
  }

  subscribe(){
    this.counterSub = this.counterObservable.subscribe((val) => {
      console.log(val)
    })
  }
}
