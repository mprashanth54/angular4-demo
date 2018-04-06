import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  constructor() { }
  emailid;
  formdata;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern(this.emailPattern)
      ])),
      passwd: new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }
  onClickSubmit(data) { console.log(data) }
}
