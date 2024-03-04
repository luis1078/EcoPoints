import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(
    email: string,
    nombres: string,
    direccion: string,
    clave: string,
    puntos: number
  ) {
    const ruta = 'https://ecopoints.online/servicios/register.php';
    const formData: FormData = new FormData();
    puntos = 50;

    formData.append('email', email);
    formData.append('nombres', nombres);
    formData.append('direccion', direccion);
    formData.append('clave', clave);
    formData.append('puntos', puntos.toString());

    return this.http.post(ruta, formData).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
