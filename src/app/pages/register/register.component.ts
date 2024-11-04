import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router){
    this.loginForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required, Validators.minLength(11), Validators.maxLength(11)],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required]
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
