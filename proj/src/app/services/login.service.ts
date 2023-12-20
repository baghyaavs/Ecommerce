import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { Products } from '../products';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isAuthenticatedSubject = false;
  private apiUrl = 'http://localhost:8080/proj'; 
  constructor(private http: HttpClient) {
    this.isAuthenticatedSubject = this.checkAuthenticated();
  }
  login(email: string, userPassword: string): Observable<any> {
    const userlog = { email:email, userPassword: userPassword};
    this.isAuthenticatedSubject = true;
    return this.http.post(`${this.apiUrl}/login`, userlog);
  }

  logout(): void {
    // Implement your logout logic here, e.g., clear token from local storage
    localStorage.removeItem('authToken');
    this.isAuthenticatedSubject = false;
    window.alert("logged out successfully")
  }
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject;
  }
  private checkAuthenticated(): boolean {
    const authToken = localStorage.getItem('authToken');
    return !!authToken; // Return true if the token is present, otherwise false
  }
  newUser(user:User):Observable<object>{
          console.log(user);
          return this.http.post(`${this.apiUrl}/register`,user);        
    }

    
  
}
