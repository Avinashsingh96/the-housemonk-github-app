import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-common-card-component',
  templateUrl: './common-card-component.component.html',
  styleUrls: ['./common-card-component.component.css']
})
export class CommonCardComponentComponent implements OnInit {
  @Input() title=""
  @Input() subtitle=""
  

  constructor() { }

  ngOnInit(): void {
    // console.log(this.data,"data")
  }

}
