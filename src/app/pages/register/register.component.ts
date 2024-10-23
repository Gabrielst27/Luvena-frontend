import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  imports: [ReactiveFormsModule, CommonModule]
})
export class RegisterComponent {
  mensagem: string = '';
  clientForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.clientForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      senha: ['', Validators.required],
      confirmarSenha:  ['', Validators.required]
    });
  }

  onBackButton(){
    this.router.navigate(['/home']);
  }

  onSubmit() {
    if (this.clientForm.valid) {
      console.log('Formulário enviado com sucesso', this.clientForm.value);
      this.mensagem = 'Cadastro concluído com sucesso!'
      
      setTimeout(() => {
        this.router.navigate(['home']);
      }, 2500);
    }
    if (!this.clientForm.valid) {
      this.mensagem = 'Preencha todos os dados corretamente' 
    }
  }
}
