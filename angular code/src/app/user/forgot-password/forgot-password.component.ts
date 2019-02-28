import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../app.service';
import {ToastrService} from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public email: any;
 
  constructor(public appService: AppService,public router: Router,private toastr: ToastrService,private cookieService: CookieService) {}

  ngOnInit() {
  }

  public goToSignUp: any = () => {

    this.router.navigate(['/signup']);

  } 
  public goToSignIn: any = () => {

    this.router.navigate(['/login']);

  } 
  public goToHome: any = () => {

    this.router.navigate(['/home']);

  } 
  
  public forgotPasswordFunction: any = () => {

    if (!this.email) {
      this.toastr.warning('Please enter email.')
    } 
    else {
      let data = {
        email: this.email 
      }
      this.appService.forgotPasswordFunction(data)
        .subscribe((apiResponse) => {

          if (apiResponse.status === 200) {
            console.log(apiResponse)
            this.toastr.success('Please check your email inbox to retrieve password.');
            setTimeout(() => {

              this.router.navigate(['/login']);

            }, 2000);
            
          } else {

            this.toastr.error(apiResponse.message)         

          }

        }, (err) => {
          this.toastr.error('Some error occured!')

        });

    } // end condition

  } // end forgotPasswordFunction

}
