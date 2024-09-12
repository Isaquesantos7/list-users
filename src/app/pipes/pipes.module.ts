import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { AddresPipe } from "./address.pipe";
import { StatusPipe } from "./status.pipe";

@NgModule({
    declarations: [
        PhonePipe,
        AddresPipe,
        StatusPipe
    ],
    exports: [
        PhonePipe,
        AddresPipe,
        StatusPipe
    ]
})
export class PipesModule {

}