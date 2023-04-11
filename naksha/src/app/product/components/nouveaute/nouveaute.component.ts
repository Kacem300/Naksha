import { Component,  OnInit } from '@angular/core';
import { SpringService } from '../../services/spring.service';
import { Product } from '../product';

@Component({
  selector: 'app-nouveaute',
  templateUrl: './nouveaute.component.html',
  styleUrls: ['./nouveaute.component.css'],
  providers: [SpringService]
})
export class NouveauteComponent implements OnInit {
  cars:Product[]=[];
  amount:number=0;
  show:boolean=false;
  loading:boolean = false;
cartproducts:any[]=[];

  constructor( private spring : SpringService) {
   }

  ngOnInit(): void {
   this.getproducts()
}

getproducts(){
  this.loading=true;
  this.spring.getUsers().subscribe((res:any) => {
    this.cars=res
    this.loading=false;

  })
}



addtocart(event:any){
  if ("cart" in localStorage){
    this.cartproducts =JSON.parse(localStorage.getItem("cart")!)
    /* let exist = this.cartproducts.find(item => item.item.id == event.item.id) */
    let exist =this.cartproducts.find(item=> item.item.id == event.item.id)
    if (exist){
      alert("produit deja dans votre panier")
    }
    else{
      this.cartproducts.push(event)
      localStorage.setItem("cart",JSON.stringify(this.cartproducts))
    }
  }
  else{
    this.cartproducts.push(event)
    localStorage.setItem("cart",JSON.stringify(this.cartproducts))
  }
  }

}


//The JSON.stringify() static method converts a JavaScript value to a JSON string
