import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PostComponent } from './components/post/post.component';
import { VistaPostComponent } from './components/vista-post/vista-post.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent  },
    { path : 'post', component : PostComponent },
    { path : 'post/:id', component : VistaPostComponent },
    { path : 'contacto', component : ContactoComponent },

    // otherwise redirect to home
    { path: '**', component : NotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);