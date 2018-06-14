
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
    constructor(){
        
    }
    getUsers() {
          return [
            {
                name: "Pinco",
                lastname: "Pallino",
                email: "pincopallino@gmail.com",
                fiscalcode: "PINCOMOLTOMAPINCO",
                province: "Urania",
                address: "via le dita 1",
                postalcode: "00100",
                phone: 3333555566
            },
            {
                name: "Livio",
                lastname: "Zitto",
                email: "liviozitto@gmail.com",
                fiscalcode: "liviozittolivozitto",
                province: "marte",
                address: "via la tea 2",
                postalcode: "00200",
                phone: 3215481845
            },
            {
                name: "Cris",
                lastname: "Russ",
                email: "cirsirisvc@gmail.com",
                fiscalcode: "omeopatiamoltoalta",
                province: "ivory",
                address: "via la qua 3",
                postalcode: "00300",
                phone: 3514787155
            }
            ]

        }
}
