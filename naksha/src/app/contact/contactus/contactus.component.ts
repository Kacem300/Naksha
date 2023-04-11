import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactserviceService } from '../service/contactservice.service';
import { User } from '../user';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

amount:number=0;
show:boolean=false;
addUserForm = new FormGroup({
  email: new FormControl('', [Validators.required]),
  message: new FormControl('', [Validators.required]),
});

  constructor(private service:ContactserviceService) { }

  ngOnInit(): void {

  }
usercontact(){

  this.service.saveUserTyped(this.addUserForm.value).subscribe((response: User) => {

      console.log(this.addUserForm.value);

    });
}
}
