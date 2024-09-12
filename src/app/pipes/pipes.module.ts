import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { AddresPipe } from "./address.pipe";
import { StatusPipe } from "./status.pipe";
import { DashIfEmptyPipe } from "./dash-ifempty.pipe";

@NgModule({
    declarations: [
        PhonePipe,
        AddresPipe,
        StatusPipe,
        DashIfEmptyPipe
    ],
    exports: [
        PhonePipe,
        AddresPipe,
        StatusPipe,
        DashIfEmptyPipe
    ]
})
export class PipesModule {

}