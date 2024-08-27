import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { 
    path: 'home',
    title: 'Inicio',
    component: HomeComponent
  },
  {
    path: 'shop',
    title: 'Productos',
    component: ProductsComponent,
  },
  {
    path: 'register',
    title: 'Registrarse',
    component: RegisterComponent
  },
  {
    path: 'login',
    title: 'Inciar-sesion',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
  },
  {
     path: "**",
     component: PageNotFoundComponent,
     title: "404- Page Not Found"
  },

];
