import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NouveauteComponent } from './components/nouveaute/nouveaute.component';

import { RouterModule } from '@angular/router';
//import { GalleryComponent } from './components/gallery/gallery.component';
import { SharedModule } from '../shared/shared.module';
//import { OneprodComponent } from './components/oneprod/oneprod.component';
//import { GalleryDetailComponent } from './components/gallery-detail/gallery-detail.component';
import { NouvdetailComponent } from './components/nouvdetail/nouvdetail.component';
import { OneprodnovComponent } from './components/oneprodnov/oneprodnov.component';





@NgModule({
  declarations: [
    NouveauteComponent,
    NouvdetailComponent,
    //GalleryComponent,
    //OneprodComponent,
   // GalleryDetailComponent,
    OneprodnovComponent,





  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule

  ],
  exports: [
   // OneprodComponent,

  ],
})
export class ProductModule { }
