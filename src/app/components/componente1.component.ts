import {Component} from '@angular/core';

@Component({
    selector: 'Componente1',
    template: `
        <h1>Proyecto de prueba</h1>
        <p> Primer componente</p>
`
})

export class Componente1{

    public titulo: string
    public login: boolean
    
    constructor(){
        this.titulo = "Poryecto Integrador"
        this.login = false
        console.log("Componente cargado");
    }
}


