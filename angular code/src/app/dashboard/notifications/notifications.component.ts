import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { SocketService } from './../../socket.service';
import { AppService } from './../../app.service';

import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers: [SocketService]
})
export class NotificationsComponent implements OnInit {

  @ViewChild('scrollMe', { read: ElementRef }) 
  
  public scrollMe: ElementRef;

  public authToken: any;
  public userInfo: any;

  public disconnectedSocket: boolean;  

  public scrollToNotificationTop:boolean= false;

  public receiverId: any;
  public receiverName: any;
  public previousNotificationList: any = [];
  public messageList: any = []; // stores the current message list display in notification box
  public pageValue: number = 0;
  public loadingPreviousNotification: boolean = false;

  constructor(public AppService: AppService,
    public SocketService: SocketService,
    public router: Router,
    private toastr: ToastrService,
    private cookieService: CookieService) {}

  ngOnInit() {

    this.authToken = this.cookieService.get('authtoken');

    this.userInfo = this.AppService.getUserInfoFromLocalstorage();

    this.receiverId = this.cookieService.get("receiverId");

    this.receiverName =  this.cookieService.get('receiverName');

    console.log(this.receiverId,this.receiverName)

    this.verifyUserConfirmation();
    this.getPreviousNotifications();
    this.getMessageFromAUser();
    
  }


  public goToDashboard: any = () => {
    this.router.navigate(['/dashboard']);
  } 
  public goToFriends: any = () => {
    this.router.navigate(['/friends']);
  } 

  public verifyUserConfirmation: any = () => {
    this.SocketService.verifyUser().subscribe((data) => {
      this.disconnectedSocket = false;
      this.SocketService.setUser(this.authToken);
    });
  }
  
  
  // public getPreviousNotifications :any = ()=>{
  //   let previousData = (this.messageList.length > 0 ? this.messageList.slice() : []);
    
  //   this.SocketService.getNotification(this.userInfo.userId,this.receiverId, this.pageValue * 10)
  //   .subscribe((apiResponse) => {
  //   console.log("this is userId" + this.userInfo.userId+" this is receiverId "+ this.receiverId)
  //     console.log(apiResponse);

  //     if (apiResponse.status == 200) {
  //       this.messageList = apiResponse.data.concat(previousData);
  //     } else {

  //       this.messageList = previousData;
  //       this.toastr.warning('No new notification found.')
  //     }

  //     this.loadingPreviousNotification = false;

  //   }, (err) => {

  //     this.toastr.error('Some error occured')


  //   });

  // }// end get previous notification with any 
  
  public getPreviousNotifications :any = ()=>{
    let previousData = (this.messageList.length > 0 ? this.messageList.slice() : []);
    
    this.SocketService.getGroupNotification("todoNotification",this.pageValue * 10)
    .subscribe((apiResponse) => {
      console.log(apiResponse);

      if (apiResponse.status == 200) {
        this.messageList = apiResponse.data.concat(previousData);
      } else {

        this.messageList = previousData;
        this.toastr.warning('No new notification found.')
      }

      this.loadingPreviousNotification = false;

    }, (err) => {

      this.toastr.error('Some error occured')


    });

  }// end get previous notification with any user



  public loadEarlierPageOfNotification: any = () => {

    this.loadingPreviousNotification = true;

    this.pageValue++;
    this.scrollToNotificationTop = true;

    this.getPreviousNotifications() 

  } // end loadPreviousNotification


  public getMessageFromAUser :any =()=>{

      this.SocketService.notificationByUserId(this.userInfo.userId)
      .subscribe((data)=>{
       
        (this.receiverId==data.senderId)?this.messageList.push(data):'';

        this.toastr.success(`${data.message}`)

        this.scrollToNotificationTop=false;

      });//end subscribe

  }// end get message from a user 


  public pushToNotificationWindow : any =(data)=>{
    this.messageList.push(data);
    console.log("this is messageList" +this.messageList)
    this.scrollToNotificationTop = false;
  }// end push to notification window

}

