import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    usuario: new FormControl(),
    clave: new FormControl(),
  });
  constructor(
    private loginservice: LoginService,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  verificarLogin(values: any) {
    this.loginservice.signin(values.usuario, values.clave).subscribe((res) => {
      console.log(res);
      this.evaluarRespuesta(res);
    });
  }

  evaluarRespuesta(res: any) {
    if (res.success) {
      const userData = res.userData;
      this.authService.setUserData(userData);
      this.toastService.showSuccessToast('Bienvenido', res.message);
      this.router.navigate(['/']);
    } else {
      this.toastService.showErrorToast('Error', res.message);
    }
  }
}
