import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InmateComponent } from './intake/inmates-list/inmates-list.component';
import { IntakeComponent } from './intake/intake.component';
import { KeepersComponent } from './keepers/keepers.component';
import { HeaderComponent } from './header/header.component';
import { InmateDetailsComponent } from './intake/inmate-details/inmate-details.component';
import { IntakeService } from './intake/intake.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DogFormComponent } from './intake/dog-form/dog-form.component';
// import { DogFormComponent } from './intake/dog-form/dog-form.component';




@NgModule({
  declarations: [
    AppComponent,
    IntakeComponent,
    KeepersComponent,
    InmateComponent,
    HeaderComponent,
    InmateDetailsComponent,
    DogFormComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [IntakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
