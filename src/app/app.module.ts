import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppCardComponent } from './app-card/app-card.component';
import { CardListComponent } from './card-list/card-list.component';
import { FormComponent } from './form/form.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { TableComponent } from './table/table.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppCardComponent,
    CardListComponent,
    FormComponent,
    FormValidationComponent,
    TableComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
