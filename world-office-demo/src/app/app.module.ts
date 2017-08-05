import { SharedModule } from './components/shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { routing } from './app.routing';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { UserService } from './services/user/user.service';
import { AuthenticationService } from './services/auth/authentication.service';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//import { fakeBackendProvider } from './helpers/fakebackend';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from "./components/home/home.component";
import { ClientesService } from "./services/clientes/clientes.service";
import { FavoritoComponent } from './components/favorito/favorito.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VistaPostComponent } from './components/vista-post/vista-post.component';

import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent, 
    FooterComponent, 
    HomeComponent, 
    FavoritoComponent,
     ClienteComponent, 
    ContactoComponent, 
    PostComponent,
    NotFoundComponent,
    VistaPostComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    SharedModule
    /**RouterModule.forRoot([
      { path : '', component : HomeComponent},
      { path : 'post', component : PostComponent},
      { path : 'post/:id', component : VistaPostComponent},
      { path : 'contacto', component : ContactoComponent},
      { path : '**', component : NotFoundComponent}
    ])**/
  ],
  providers: [
    ClientesService,
    AuthGuard,
    PostService,
    AuthenticationService,
    UserService,
    //
    //fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
