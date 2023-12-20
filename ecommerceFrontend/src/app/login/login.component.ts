import { Component } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 //creating an object for user class
  user:User=new User();
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: LoginService,private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      userPassword: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log('Form submitted');
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.userPassword;
      console.log('Email:', email);
      console.log('Password:', password);
      this.authService.login(email, password).subscribe(
        response => {
          console.log('Login successful:', response);
          window.alert("user is logged in successfully")
          this.router.navigateByUrl('/');
        },
        error => {
          console.error('Login failed:', error);
          window.alert("login failed")
        }
      );
    }
  }

  /*email:string="";
  userPassword:string="";

  constructor(private router:Router, private http:HttpClient){}
  Login(){
    console.log(this.email);
    console.log(this.userPassword);
    let bodyData={
      email:this.email,
      userPassword:this.userPassword,
    };
    this.http.post("http://localhost:8080")
  }
*/

}

 /*loginRegister(){
    console.log(this.user);
    this.loginservice.loginUser(this.user).subscribe(date=>
    {
      window.alert("user login is successful")
    },
    error=>window.alert("user login is not successful"));
  }*/