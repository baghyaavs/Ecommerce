import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  title = 'proj';
    constructor(private authService: LoginService) {}
    ngOnInit() {}
    isLoggedIn(): boolean {
      return this.authService.isAuthenticated(); // Implement this method in AuthService
    }
    logout() {
      this.authService.logout(); // Implement this method in AuthService
    }
}
