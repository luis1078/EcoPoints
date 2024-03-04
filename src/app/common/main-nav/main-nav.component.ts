import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit {
  userData: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userData = this.authService.getUserData(); // Obtener los datos del usuario actual
  }

  logout() {
    this.router.navigateByUrl('/login');
    this.authService.logout(); // Llamar al método logout() del servicio AuthService
  }
}
