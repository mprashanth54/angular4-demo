import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../form/form.component'
import { FormValidationComponent } from '../form-validation/form-validation.component'

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'validation',
    component: FormValidationComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
