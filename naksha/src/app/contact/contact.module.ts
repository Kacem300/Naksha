import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from './contactus/contactus.component';
import { InfoComponent } from './info/info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactusComponent,
    InfoComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule ,
    ReactiveFormsModule,
  ],
  exports:[
    InfoComponent,
    ContactusComponent,

  ],
})
export class ContactModule { }
