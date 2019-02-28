import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  public goToSignIn: any = () => {

    this.router.navigate(['/login']);

  } // end goToSignin

  public goToSignUp: any = () => {

    this.router.navigate(['/signup']);

  } // end goToSignin

}


