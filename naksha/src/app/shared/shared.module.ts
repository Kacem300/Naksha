import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './Component/head/head.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpinwheelComponent } from './Component/spinwheel/spinwheel.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations:[
    HeadComponent,
    SpinwheelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
 exports:[
  HeadComponent,
  SpinwheelComponent,
  FormsModule
 ]
})
export class SharedModule { }
