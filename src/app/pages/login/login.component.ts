import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  mensagem: string = '';
  clientForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.clientForm = this.fb.group({      
      email: ['', [Validators.required, Validators.email]],      
      senha: ['', Validators.required],      
    });
  }

  onBackButton(){
    this.router.navigate(['/home']);
  }


  onSubmit() {
    if (this.clientForm.valid) {
      console.log('Bem vindo!!!', this.clientForm.value);      
      
      setTimeout(() => {
        this.router.navigate(['home']);
      }, 2500);
    }
    if (!this.clientForm.valid) {
      this.mensagem = 'Preencha todos os dados corretamente' 
    }
  }
}
