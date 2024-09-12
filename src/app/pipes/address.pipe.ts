import { Pipe, PipeTransform } from "@angular/core";
import { IAddress } from "../interfaces/user/address";

@Pipe({
    name: 'address'
})

export class AddresPipe implements PipeTransform {
    transform(address: IAddress): string {
        const INVALID_ADDRESS = !address || 
        !address.rua || 
        !address.cidade || 
        !address.estado &&
        address.numero === null ||
        address.numero === undefined

        if (INVALID_ADDRESS) {
            return 'Endereço não disponível pu invalido!'
        }

        return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`
    }

}