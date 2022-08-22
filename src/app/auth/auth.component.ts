import { Component, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})


export class AuthComponent {
  isLoginMode = true;
  log!: number;
  error!: string;
  
  constructor(private auth: AuthService, private route: Router){}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if(this.isLoginMode){
      console.log(form.value);
      const email = form.value.email;
      const pass = form.value.password;
      this.log = this.auth.login(email, pass);
      console.log(this.log);
      if(this.log === 1)
      {
        this.route.navigate(['/movies']);
      }
      else 
      {
        this.error = "This E-mail not found."
      }
    }
    else 
    {
      console.log(form.value);
      const email = form.value.email;
      const pass = form.value.password;
      this.log = this.auth.signup(email, pass);
      console.log(this.log);
      if(this.log === 0)
      {
          this.error = "This E-mail is already exist !";
      }
    }
    form.reset();
  }
}
