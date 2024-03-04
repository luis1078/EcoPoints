import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CanjeComponent } from './pages/canje/canje.component';
import { RecompensasComponent } from './pages/recompensas/recompensas.component';
import { MisionesComponent } from './pages/misiones/misiones.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'canje', component: CanjeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'recompensas', component: RecompensasComponent },
  { path: 'misiones', component: MisionesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: 'inicio' }, // Redirige a la página de inicio si la ruta no coincide con ninguna ruta definida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
