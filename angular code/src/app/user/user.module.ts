import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{RouterModule,Routes} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { InternationalPhoneNumberModule } from '@coretech/ngx-international-phone-number/dist';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InternationalPhoneNumberModule,
    RouterModule.forChild([
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent},
      {path:'forgot-password',component:ForgotPasswordComponent},  
    ])
  ],
  declarations: [SignupComponent, LoginComponent, ForgotPasswordComponent, ResetPasswordComponent]
})
export class UserModule { }
