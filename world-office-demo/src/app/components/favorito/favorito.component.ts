import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wo-app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.sass']
})
export class FavoritoComponent implements OnInit {

  @Input('esFavorito') esSeleccionado : boolean;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.esSeleccionado = !this.esSeleccionado;
    this.change.emit(this.esSeleccionado); //disparara el evento hacia el padre
  }

}
