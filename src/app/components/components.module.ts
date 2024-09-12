import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AngularMateriaModule } from "../angular-material/angular-material.module";
import { UserDetailsComponent } from './user-details/user-details.component';

import { FilterComponent } from './filter/filter.component';

import { FormsModule } from "@angular/forms";
import { UsersListComponent } from './users-list/users-list.component';
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
  declarations: [
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent
  ],
  imports: [
    AngularMateriaModule,
    FormsModule,
    CommonModule,
    PipesModule
  ],
  exports: [
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent
  ]
})
export class ComponentsModule {

}