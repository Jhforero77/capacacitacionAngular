import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wo-app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent implements OnInit {

  modosContacto : any = [
    { id: 1, tipo : 'Email'},
    { id: 2, tipo : 'Celular'},
    { id: 3, tipo: 'SMS'},
    { id: 4, tipo: 'Call to a friend'}
  ]

  constructor() { }

  ngOnInit() {
  }

  log(x : string){
    console.log(x);
  }

  enviar(f : any){
    console.log(JSON.stringify(f.value));
  }

}
