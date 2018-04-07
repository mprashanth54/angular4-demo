import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormArray
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
  values = [
    {
      name: "I have a sidekick"
    },
    {
      name: "I don't have a sidekick"
    },
    {
      name: "I need a sidekick"
    }
  ]

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern(this.emailPattern)
      ])),
      passwd: new FormControl("", [Validators.required, Validators.minLength(8)]),
      power: new FormControl("", Validators.required),
      options: new FormArray([
        new FormControl(false),
        new FormControl(false),
        new FormControl(false)])
    });
  }
  onClickSubmit(data) { console.log(data) }
}
