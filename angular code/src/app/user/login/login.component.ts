import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../app.service';
import {ToastrService} from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: any;
  public password: any;

  constructor(public appService: AppService,public router: Router,private toastr: ToastrService,private cookieService: CookieService) {}

  ngOnInit() {
  }

  public goToSignUp: any = () => {

    this.router.navigate(['/signup']);

  } 
  public goToForgotPassword: any = () => {

    this.router.navigate(['/forgot-password']);

  } 
  public goToHome: any = () => {

    this.router.navigate(['/home']);

  } 
  
  public signinFunction: any = () => {

    if (!this.email) {
      this.toastr.warning('Please enter email.')


    } else if (!this.password) {

      this.toastr.warning('Please enter password.')


    } else {

      let data = {
        email: this.email,
        password: this.password
      }

      this.appService.signinFunction(data)
        .subscribe((apiResponse) => {

          if (apiResponse.status === 200) {
            console.log(apiResponse)

             this.cookieService.set('authtoken', apiResponse.data.authToken);
            
             this.cookieService.set('receiverId', apiResponse.data.userDetails.userId);
            
             this.cookieService.set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
           
             this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails)
            
             this.router.navigate(['/dashboard']);

          } else {

            this.toastr.error(apiResponse.message)         

          }

        }, (err) => {
          this.toastr.error('Some error occured!')

        });

    } // end condition

  } // end signinFunction

}