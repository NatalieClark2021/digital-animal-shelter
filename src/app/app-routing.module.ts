import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DogFormComponent } from "./intake/dog-form/dog-form.component";

import { InmateDetailsComponent } from "./intake/inmate-details/inmate-details.component";
import { IntakeComponent } from "./intake/intake.component";
import { KeepersComponent } from "./keepers/keepers.component";

const appRoutes: Routes = [
  {path: "", redirectTo: "/intake", pathMatch: "full"},
  { path: "intake", component: IntakeComponent,
  children: [{path: 'inmate/:id' , component: InmateDetailsComponent},
  {path: "dogform", component: DogFormComponent},
  {path: "dogform/:id", component: DogFormComponent}]},
  { path: "keepers", component: KeepersComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
