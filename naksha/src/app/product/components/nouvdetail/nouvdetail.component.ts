import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpringService } from '../../services/spring.service';

@Component({
  selector: 'app-nouvdetail',
  templateUrl: './nouvdetail.component.html',
  styleUrls: ['./nouvdetail.component.css'],
  providers: [SpringService]

})
export class NouvdetailComponent implements OnInit {
  loading:boolean = false;
id:any;
item:any={};
    constructor(private route:ActivatedRoute,private service:SpringService) {
      this.id = this.route.snapshot.paramMap.get("id")
      console.log(this.id)
     }
    ngOnInit(): void {
      this.getprodbyid()
      }
getprodbyid(){
  this.service.getusersbyid(this.id).subscribe(res=>{
    this.item =res;
   })
}

  }



