import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  signin(usuario: string, clave: string) {
    const ruta = 'https://ecopoints.online/servicios/login.php';
    const formData: FormData = new FormData();
    formData.append('usuario', usuario);
    formData.append('clave', clave);

    return this.http.post(ruta, formData).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
