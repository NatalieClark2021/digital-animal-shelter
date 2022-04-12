import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IntakeComponent } from "./intake/intake.component";
import { KeepersComponent } from "./keepers/keepers.component";

const appRoutes: Routes = [
  {path: "", redirectTo: "/intake", pathMatch: "full"},
  { path: "intake", component: IntakeComponent},
  { path: "keepers", component: KeepersComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
