import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, NgForm } from '@angular/forms';
import { CommonService } from '../common.service';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],

})
export class UserComponent implements OnInit {
  constructor(private newService: CommonService) {}
    Repdata;
    valbutton = 'Save';

ngOnInit() {
  this.newService.GetUser().subscribe(data => this.Repdata = data);
}

onSave = function(user, isValid: boolean) {
  user.mode = this.valbutton;
  this.newService.saveUser(user)
    .subscribe(data => {alert(data.data);
  this.ngOnInit();
    }
  , error => this.errorMessage = error);
};

edit = function(temp) {
  this.id = temp._id;
  this.firstName = temp.firstName;
  this.lastName = temp.lastName;
  this.email = temp.email;
  this.password = temp.password;
  this.birthdate = temp.birthdate;
  this.valbutton = 'Update';
};

delete = function(id) {
  this.newService.deleteUser(id)
    .subscribe(data => {alert(data.data);
  this.ngOnInit(); }, error => this.errorMessage = error);
};

}
