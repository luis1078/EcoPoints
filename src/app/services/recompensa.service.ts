import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecompensaService {
  constructor(private http: HttpClient) {}

  recompensasAll() {
    const ruta = 'https://ecopoints.online/servicios/recompensa.php';
    return this.http.get(ruta);
  }
}
