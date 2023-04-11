import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-oneprodnov',
  templateUrl: './oneprodnov.component.html',
  styleUrls: ['./oneprodnov.component.css']
})
export class OneprodnovComponent implements OnInit {
  @Input () data:any={} ;
  @Output () item = new EventEmitter ;
  show:boolean=false;
  amount:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.item.emit({item:this.data,quantity:this.amount})
    }
}
