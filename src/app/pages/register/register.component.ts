import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    }, { validator: this.passwordMatchValidator });
  }

  onBackButton(){
    this.router.navigate(['/home']);
  }

  passwordMatchValidator(form: AbstractControl): { [key: string]: boolean } | null {
    const senha = form.get('senha')?.value;
    const confirmarSenha = form.get('confirmarSenha')?.value;
    if (senha !== confirmarSenha) {
      return { 'mismatch': true };
    }
    return null;
  }

  onSubmit() {
    if (this.clientForm.valid) {
      console.log('Formulário enviado com sucesso', this.clientForm.value);
      this.mensagem = 'Cadastro concluído com sucesso!'
      
      setTimeout(() => {
        this.router.navigate(['home']);
      }, 700);
    }
    if (!this.clientForm.valid) {
      this.mensagem = 'Preencha todos os dados corretamente' 
    }
  }
}
