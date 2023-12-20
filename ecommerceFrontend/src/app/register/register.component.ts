import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { User } from '../user';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
 /* registrationForm: FormGroup=this.fb.group({
    userName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    userPassword: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(private fb: FormBuilder, private registrationService: LoginService) {}*/
  user:User=new User();
  constructor(private loginservice: LoginService, private router:Router) {}
  Register(){
    console.log(this.user);
    this.loginservice.newUser(this.user).subscribe(date=>
    {
        window.alert("Registration is done successfully")
        this.router.navigateByUrl('/login');
    },
      error=> window.alert("Registration failed"));
  }
  ngOnInit() {
  }   
  /*onSubmit() {
    if (this.registrationForm.valid) {
      const userData = this.registrationForm.value;
      // Call the registration service to send the data to the backend
      this.registrationService.registerUser(userData).subscribe(
        (response) => {
          console.log('Registration successful:', response);
          window.alert("Registration is done successfully")
        },
        (error) => {
          console.error('Registration failed:', error);
          window.alert("Registration failed")
        }
      );
    }
  }*/
}