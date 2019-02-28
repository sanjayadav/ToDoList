import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../app.service';
import {ToastrService} from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public password: any;
 
  constructor(public appService: AppService,public router: Router,private toastr: ToastrService,private cookieService: CookieService) {}

  ngOnInit() {
  }

  public goToHomr: any = () => {

    this.router.navigate(['/home']);

  } 
  public forgotPasswordFunction: any = () => {

    if (!this.password) {
      this.toastr.warning('Please enter password.')
    } 
    else {
      let data = {
        email: this.password 
      }
      this.appService.forgotPasswordFunction(data)
        .subscribe((apiResponse) => {

          if (apiResponse.status === 200) {
            console.log(apiResponse)
            this.toastr.success('Password updated successfully. Login to continue.');
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

  } // end resetPasswordFunction

}
