import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InmateComponent } from './intake/inmates-list/inmates-list.component';
import { IntakeComponent } from './intake/intake.component';
import { KeepersComponent } from './keepers/keepers.component';
import { HeaderComponent } from './header/header.component';
import { InmateDetailsComponent } from './intake/inmate-details/inmate-details.component';


@NgModule({
  declarations: [
    AppComponent,
    IntakeComponent,
    KeepersComponent,
    InmateComponent,
    HeaderComponent,
    InmateDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
