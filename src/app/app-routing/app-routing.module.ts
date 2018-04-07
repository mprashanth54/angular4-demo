import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../form/form.component'
import { FormValidationComponent } from '../form-validation/form-validation.component'
import { ParameterRouteComponent } from '../parameter-route/parameter-route.component'
import { NotFoundComponent } from '../not-found/not-found.component'
const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'validation',
    component: FormValidationComponent,
  },
  {
    path: 'search/:id',
    component: ParameterRouteComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
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
