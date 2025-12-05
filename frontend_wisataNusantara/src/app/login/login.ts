import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;
  isLoading = false
  successMessage = '';
  errorMessage = '';
  showPassword = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  submitLogin(): void{
    if(this.loginForm.valid){
      this.isLoading = true;
      this.successMessage = '';
      this.errorMessage = '';

      const formData = this.loginForm.value;

      this.authService.login(formData).subscribe({
        next: (response) => {
          console.log('Login succesfull', response);
          this.successMessage = response.message || 'login berhasil'

          if(response.data){
            this.authService.saveUserData(response.data);
          }

          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1000);
        },
        error: (error) => {
          console.log('Login failed', error);
          this.isLoading = false;
          this.errorMessage = error.error?.message || 'Email atau password salah';

          setTimeout(() => {
              this.errorMessage = '';
          }, 5000);
        }
      })
    }else{
      console.log('Form is not valid');
      this.errorMessage = 'Mohon lengkapi semua field dengan bener';
    }
  }
}
