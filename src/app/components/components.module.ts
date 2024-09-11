import { NgModule } from "@angular/core";
import { AngularMateriaModule } from "../angular-material/angular-material.module";
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    AngularMateriaModule
  ],
  exports: [
    UserDetailsComponent
  ]
})
export class ComponentsModule {

}