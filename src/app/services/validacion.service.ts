import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValidacionService {
  constructor(private http: HttpClient) {}

  validarCodigo(codigoValidacion: string) {
    const ruta = 'https://ecopoints.online/servicios/validar.php';

    const formData: FormData = new FormData();
    formData.append('codigoValidacion', codigoValidacion);
    return this.http.post(ruta, formData).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
