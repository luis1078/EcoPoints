import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userData: any; // Propiedad para almacenar los datos del usuario

  constructor() {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      try {
        this.userData = JSON.parse(storedUserData);
      } catch (error) {
        console.error(
          'Error al analizar los datos del usuario almacenados:',
          error
        );
        // Si hay un error al analizar el JSON, se borra el almacenamiento local
        localStorage.removeItem('userData');
      }
    }
  }

  setUserData(data: any) {
    this.userData = data;
    // Almacenar los datos de usuario en el almacenamiento local
    localStorage.setItem('userData', JSON.stringify(data));
  }

  getUserData() {
    return this.userData;
  }

  clearUserData() {
    this.userData = null;
    // Borrar los datos del usuario del almacenamiento local
    localStorage.removeItem('userData');
  }
  logout() {
    this.clearUserData(); // Borrar los datos del usuario al cerrar sesión
    // Otras tareas de cierre de sesión, como redireccionar al componente de inicio de sesión
  }
}
