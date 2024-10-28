import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    const formData = this.loginForm.value;
    console.log("dados: ", formData);

    if(this.loginForm.valid){
      setTimeout(() => {
        this.router.navigate(['/home'])
      }, 200)
    }

    else{
      this.loginForm.markAllAsTouched();
    }
  }
}
