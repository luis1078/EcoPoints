import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainBannerComponent } from './home/main-banner/main-banner.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CanjeComponent } from './pages/canje/canje.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { AuthService } from './services/auth.service';
import { ToastComponent } from './common/toast/toast.component';
import { ToasterComponent } from './common/toaster/toaster.component';
import { RecompensasComponent } from './pages/recompensas/recompensas.component';
import { MisionesComponent } from './pages/misiones/misiones.component';
import { AdminUsuariosComponent } from './admin/admin-usuarios/admin-usuarios.component';
import { AdminMisionComponent } from './admin/admin-mision/admin-mision.component';
import { AdminRecompensaComponent } from './admin/admin-recompensa/admin-recompensa.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFooterComponent,
    MainNavComponent,
    MainHeaderComponent,
    MainBannerComponent,
    InicioComponent,
    AcercaComponent,
    ContactoComponent,
    LoginComponent,
    RegisterComponent,
    CanjeComponent,
    ToastComponent,
    ToasterComponent,
    RecompensasComponent,
    MisionesComponent,
    AdminUsuariosComponent,
    AdminMisionComponent,
    AdminRecompensaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
