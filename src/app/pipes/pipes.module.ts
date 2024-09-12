import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { AddresPipe } from "./address.pipe";

@NgModule({
    declarations: [
        PhonePipe,
        AddresPipe
    ],
    exports: [
        PhonePipe,
        AddresPipe
    ]
})
export class PipesModule {

}