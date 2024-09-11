import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AngularMateriaModule } from "../angular-material/angular-material.module";
import { UserDetailsComponent } from './user-details/user-details.component';

import { FilterComponent } from './filter/filter.component';

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    UserDetailsComponent,
    FilterComponent
  ],
  imports: [
    AngularMateriaModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    UserDetailsComponent,
    FilterComponent,
  ]
})
export class ComponentsModule {

}