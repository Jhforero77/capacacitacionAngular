import { Cliente } from './../../model/cliente';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes/clientes.service';

@Component({
  selector: 'wo-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  /*post = {
    titulo : 'Soy el titulo del post',
    favorito : false
  }

  public nombre : string = "Mateo";
  public clientes : string[] = [];

  public banner : string = "http://lorempixel.com/400/200/";
  public isActive : boolean = false;

  constructor(serviceCliente : ClientesService) {
    this.clientes = serviceCliente.getClientes();
  }

  ngOnInit() {
  }

  queDiaEsHoy(){
    return new Date();
  }

  onClick($event){
    this.isActive = !this.isActive;
    console.log($event);
  }

  log(){
    console.log(`Hola ${this.nombre}`);
  }

  cambioFavorito(estado : boolean){
    this.post.favorito = estado;
    console.log('Evento de cambio de estado');
  }*/

  public clientes : Cliente[] = [];
  public page : number = 1;
  public limit : number = 0;

  constructor(private http : HttpClient){}

  ngOnInit() : void {
    this.getClientes()
  }

  getClientes() : void{
    this.http.get('https://swapi.co/api/people?page=' + this.page).subscribe( (data) => {
      this.clientes = data["results"];
      this.limit = (data['count'] / 10) + 1;
      console.log(this.clientes);
    });
  }

  bajarPagina(){
    if(this.page > 1){
      this.page--;
      this.getClientes();
    }
  }

  subirPagina(){
    if(this.page < this.limit){
      this.page++;
      this.getClientes();
    }
  }

  public ClientesOtro : any[] = [
    { id: 48, nombre : 'Hugo'},
    { id: 34, nombre : 'Paco'},
    { id: 21, nombre : 'Luis'}
  ]

  agregarCliente(){
    this.ClientesOtro.push({ id: 25, nombre: 'Donald'})
  }

  modificarCliente(cliente : any){
    cliente['nombre'] = 'Camila';
  }

  eliminarCliente(cliente : any){
    let i = this.ClientesOtro.indexOf(cliente);
    this.ClientesOtro.splice(i, 1);
  }

}
