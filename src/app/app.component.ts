import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // ngOnInit() {
  //   this.spinner();
  // }

  // spinner() {
  //   setTimeout(() => {
  //     const spinnerElement = document.getElementById('spinner');
  //     if (spinnerElement) {
  //       spinnerElement.classList.remove('show');
  //     }
  //   }, 1);
  // }

  constructor(private router: Router) {}

  title = 'appEcoPoints';

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
  isRegisterPage(): boolean {
    return this.router.url === '/register';
  }
}
