import { Cliente } from './../../model/cliente';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wo-app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.sass']
})
export class ClienteComponent implements OnInit {

  @Input() data : Cliente;

  constructor() { }

  ngOnInit() {
  }

}
