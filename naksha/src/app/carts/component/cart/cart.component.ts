import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {usercom} from 'C:/Users/21693/Documents/Naksha/naksha/src/app/usercom';
import { CartserviceService } from '../../service/cartservice.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  total:any=0;
  show:boolean=false;
cartproducts:any[]=[];
userinfo:any=[];
prod:any;




  constructor(private service:CartserviceService) { }


  ngOnInit(): void {
    this.getprod();

  }
  addCart() {

    let products= this.cartproducts.map(item => {
      return {title:item.item.title,price:item.quantity,img:item.item.img,description:item.item.description,id:item.item.id


      }
     })




     let Model = {
      nom:"benbrahim",
      prenom:"kacem",
       date: new Date(),
       produit:products
       //"title":,"price":0,"description":,"img":,"id":0

     }

     this.service.savecommande(Model).subscribe(res => {
      console.log(Model)
     })


   }

  usercom(){
    this.service.savecommande(this.userinfo).subscribe((Response:usercom)=>{
      console.log(this.userinfo);
    })
  }



getprod(){
  if ("cart" in localStorage){
    this.cartproducts =JSON.parse(localStorage.getItem("cart")!);
}
this.cartotal();
}



cartotal(){
this.total=0 ;
for(let i in this.cartproducts){
  this.total += this.cartproducts[i].item.price * this.cartproducts[i].quantity;
}
}


addnumber(){
  localStorage.setItem("cart" , JSON.stringify(this.cartproducts));
  this.cartotal();
}

deletecart(index:number){
  this.cartproducts.splice(index,1);
  localStorage.setItem("cart" , JSON.stringify(this.cartproducts));
  this.cartotal();
}
clearcart(){
  this.cartproducts = [];
  localStorage.setItem("cart" , JSON.stringify(this.cartproducts));
  this.cartotal();
}

}

