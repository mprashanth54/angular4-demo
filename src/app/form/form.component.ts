import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Register(regForm: NgForm) {
    // ng - touched: Controls have been visited
    // ng - untouched: controls have not been visited
    // ng - dirty : control value has been changed
    // ng - pristine: Controls value have not been changed
    // ng - valid : control values are valid
    // ng - invalid : control values are invalid
    console.log(regForm);
  }

}
