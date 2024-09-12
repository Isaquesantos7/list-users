import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'dashEmpty'
})

export class DashIfEmptyPipe implements PipeTransform {
    transform(value: any): string | any {
        const IS_EMPTY = undefined || value === null || value === '';

        if (IS_EMPTY) {
            return '-';
        }

        return value;
    }
}