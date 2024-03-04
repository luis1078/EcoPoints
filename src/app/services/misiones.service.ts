import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MisionesService {
  constructor(private http: HttpClient) {}

  misionesAll() {
    const ruta = 'https://ecopoints.online/servicios/misiones.php';
    return this.http.get(ruta);
  }
}
