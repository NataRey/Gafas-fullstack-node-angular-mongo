import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    title: "Inicio de Sesión"
  },
  {
    path: "productos",
    component: ProductsComponent,
    title: "Productos"
  },
  {
    path: "inicio",
    component: HomeComponent,
    title: "Inicio"
  },
  {
    path: "register",
    component: RegisterComponent,
    title: "Registrarse"
  },
  {
    path: "",
    redirectTo: "inicio",
    pathMatch: "full"
  },
  // {
  //   path: "**",
  //   component: NotFoundComponent,
  //   title: "Not Found"
  // },



];
