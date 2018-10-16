import {Component } from '@angular/core';


@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    frase: any = {
        mensaje: 'mensaje LOL',
        autor: 'yorch'
    };

    personajes: string[];

    mostrar: boolean;

    constructor() {
        this.mostrar = true;
        this.personajes = ['Spiderman', 'Venom', 'Wolverine'];
    }
}
