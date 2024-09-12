import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'status'
})

export class StatusPipe implements PipeTransform {
    transform(status: boolean): string {
        const INVALID_OR_VALID = status === undefined || status === null;

        if (INVALID_OR_VALID) {
            return 'Status indisponível ou inválido!';
        }

        return status ? 'Disponível' : 'Invalído';
    }
}