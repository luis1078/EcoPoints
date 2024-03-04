import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { ValidacionService } from '../services/validacion.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(),
    nombres: new FormControl(),
    direccion: new FormControl(),
    clave: new FormControl(),
    puntos: new FormControl(),
  });

  codigoValidacion: string | undefined; // Variable para almacenar el código de validación ingresado
  @ViewChild('myModal') modal: ElementRef | undefined; // Accede al elemento del DOM del modal

  constructor(
    private registerservice: RegisterService,
    private router: Router,
    private validacionservice: ValidacionService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {}
  openModal() {
    // Abre el modal
    if (this.modal && this.modal.nativeElement) {
      this.modal.nativeElement.style.display = 'block';
    }
  }
  closeModal() {
    // Cierra el modal y restablece el valor del código de validación
    if (this.modal && this.modal.nativeElement) {
      this.modal.nativeElement.style.display = 'none';
      this.codigoValidacion = '';
    }
  }
  verificarCodigo() {
    if (this.codigoValidacion) {
      this.validacionservice.validarCodigo(this.codigoValidacion).subscribe(
        (res: any) => {
          if (res.success) {
            this.closeModal(); // Cierra el modal después de verificar el código
            this.router.navigate(['/login']);
            this.toastService.showSuccessToast('Verificado', res.message);
          } else {
            this.toastService.showWarningToast('Errado', res.message);
          }
        },
        (error: any) => {
          console.log('Error:', error);
        }
      );
    }
  }

  registrarUsuario(values: any) {
    this.registerservice
      .register(
        values.email,
        values.nombres,
        values.direccion,
        values.clave,
        values.puntos
      )

      .subscribe((res: any) => {
        if (res.status == 'success') {
          this.toastService.showSuccessToast('Mensaje', res.message);
          this.openModal();
        } else {
          this.toastService.showWarningToast('Error', res.message);
        }
      });
  }
}
