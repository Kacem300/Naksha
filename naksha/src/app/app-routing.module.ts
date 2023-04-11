import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contact/contactus/contactus.component';
import { InfoComponent } from './contact/info/info.component';

import { NouveauteComponent } from './product/components/nouveaute/nouveaute.component';
import { AcceuilComponent } from './acc/components/acceuil/acceuil.component';
//import { GalleryComponent } from './product/components/gallery/gallery.component';
//import { GalleryDetailComponent } from './product/components/gallery-detail/gallery-detail.component';
import { NouvdetailComponent } from './product/components/nouvdetail/nouvdetail.component';
import { CartComponent } from './carts/component/cart/cart.component';




const routes: Routes = [
  {path:"Acceuil", component:AcceuilComponent},
  {path:"Nouveaute", component:NouveauteComponent},
  {path:"contactus", component:ContactusComponent},
  //{path:"gallery", component:GalleryComponent},
  {path:"info", component:InfoComponent},
  //{path:"gallery-detail/:id",component:GalleryDetailComponent},
  {path:"nouvdetai/:id",component:NouvdetailComponent},
  {path:"cart", component:CartComponent},


  {path:"**",redirectTo:"Acceuil",pathMatch:"full"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

