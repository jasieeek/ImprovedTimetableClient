import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { LogoutComponent } from './pages/logout/logout.component';

@NgModule({
  declarations: [LoginFormComponent, LogoutComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginModule { }
