import { Component } from '@angular/core'
@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{

    mostrar:boolean = true;

    frase: any ={
        mensaje:'opcion a',
        autor: 'yo'
    }

    arreglo:string[] = [
        'diego', 'leo', 'hugo'
    ]
}