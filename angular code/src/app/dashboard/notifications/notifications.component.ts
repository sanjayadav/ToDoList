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
  public liveUserInfo:any;
  public userList: any = [];
  public disconnectedSocket: boolean;  

  public scrollToNotificationTop:boolean= false;

  public receiverId: any;
  public receiverName: any;
  public previousNotificationList: any = [];
  public messageText: any; 
  public messageList: any = []; // stores the current message list display in notification box
  public pageValue: number = 0;
  public loadingPreviousNotification: boolean = false;

  public email: any;
  public searchedUserData : any;

  constructor(public AppService: AppService,
    public SocketService: SocketService,
    public router: Router,
    private toastr: ToastrService,
    private cookieService: CookieService) {}

  ngOnInit() {

    this.authToken = this.cookieService.get('authtoken');

    this.userInfo = this.AppService.getUserInfoFromLocalstorage();

    this.AppService.getSingleUserData(this.userInfo.userId).subscribe(
      data =>{
        console.log(data);
        this.liveUserInfo=data["data"];
      },
      error=>{
        console.log("some error occured");
        console.log(error);
      }
    ); 

    this.receiverId = this.cookieService.get("receiverId");

    this.receiverName =  this.cookieService.get('receiverName');

    console.log(this.receiverId,this.receiverName)

    if(this.receiverId!=null && this.receiverId!=undefined && this.receiverId!=''){
      this.userSelectedToNotification(this.receiverId,this.receiverName)
    }

    //this.checkStatus();
    this.verifyUserConfirmation();
    this.getOnlineUserList();
    this.getMessageFromAUser()
  }


  // public checkStatus: any = () => {
  //   if (this.cookieService.get('authtoken') === undefined || this.cookieService.get('authtoken') === '' || this.cookieService.get('authtoken') === null) {
  //     this.router.navigate(['/']);
  //     return false;
  //   } else {
  //     return true;
  //   }
  //} // end checkStatus


  public goToDashboard: any = () => {

    this.router.navigate(['/dashboard']);

  } 
  public verifyUserConfirmation: any = () => {
    this.SocketService.verifyUser().subscribe((data) => {
      this.disconnectedSocket = false;
      this.SocketService.setUser(this.authToken);
    });
  }
  
  public getOnlineUserList :any =()=>{

    this.SocketService.onlineUserList().subscribe((userList) => {
        this.userList = [];
        for (let x in userList) {
          for(let y = 0; y < this.liveUserInfo.friends.length; y++){
            let friend = this.liveUserInfo.friends[y].userId; 
            if(friend==x){
              let temp = { 'userId': x, 'name': userList[x], 'unread': 0, 'notificationing': false };
              this.userList.push(temp);
            } 
          }            
        }
        console.log(this.userList);
      }); // end online-user-list
  }
  // notification related methods 


  public getPreviousNotifications :any = ()=>{
    let previousData = (this.messageList.length > 0 ? this.messageList.slice() : []);
    
    this.SocketService.getNotification(this.userInfo.userId,this.receiverId, this.pageValue * 10)
    .subscribe((apiResponse) => {
    console.log("this is userId" + this.userInfo.userId+" this is receiverId "+ this.receiverId)
      console.log(apiResponse);

      if (apiResponse.status == 200) {
        console.log("this is messageList" +this.messageList)
        this.messageList = apiResponse.data.concat(previousData);

      } else {

        this.messageList = previousData;
        this.toastr.warning('No Messages available')
      }

      this.loadingPreviousNotification = false;

    }, (err) => {

      this.toastr.error('some error occured')


    });

  }// end get previous notification with any user


  public loadEarlierPageOfNotification: any = () => {

    this.loadingPreviousNotification = true;

    this.pageValue++;
    this.scrollToNotificationTop = true;

    this.getPreviousNotifications() 

  } // end loadPreviousNotification

  public userSelectedToNotification: any = (id, name) => {

    console.log("setting user as active") 

    // setting that user to notificationing true   
    this.userList.map((user)=>{
        if(user.userId==id){
          user.notificationing=true;
        }
        else{
          user.notificationing = false;
        }
    })

    this.cookieService.set('receiverId', id);

    this.cookieService.set('receiverName', name);

    this.receiverName = name;

    this.receiverId = id;

    this.messageList = [];

    this.pageValue = 0;

    let notificationDetails = {
      userId: this.userInfo.userId,
      senderId: id
    }


    this.SocketService.markNotificationAsSeen(notificationDetails);

    this.getPreviousNotifications();

  } // end userBtnClick function


  public sendMessageUsingKeypress: any = (event: any) => {

    if (event.keyCode === 13) { // 13 is keycode of enter.

      this.sendMessage();

    }

  } // end sendMessageUsingKeypress

  public sendMessage: any = () => {

    if(this.messageText){

      let notificationMsgObject = {
        senderName: this.userInfo.firstName + " " + this.userInfo.lastName,
        senderId: this.userInfo.userId,
        receiverName: this.cookieService.get('receiverName'),
        receiverId: this.cookieService.get('receiverId'),
        message: this.messageText,
        createdOn: new Date()
      } // end notificationMsgObject
      console.log(notificationMsgObject);
      this.SocketService.SendNotificationMessage(notificationMsgObject)
      this.pushToNotificationWindow(notificationMsgObject)
    }
    else{
      this.toastr.warning('text message can not be empty')

    }

  } // end sendMessage

  public pushToNotificationWindow : any =(data)=>{

    this.messageText="";
    this.messageList.push(data);
    
    this.scrollToNotificationTop = false;


  }// end push to notification window

  public getMessageFromAUser :any =()=>{

      this.SocketService.notificationByUserId(this.userInfo.userId)
      .subscribe((data)=>{
       

        (this.receiverId==data.senderId)?this.messageList.push(data):'';

        this.toastr.success(`${data.message}`)

        this.scrollToNotificationTop=false;

      });//end subscribe

  }// end get message from a user 


  public searchUserFunction: any = () => {

    if (!this.email) {
      this.toastr.warning('Please enter email.')
    } 
    else {
      let data = {
        email: this.email 
      }
      this.AppService.searchUser(data).subscribe(
        data =>{
          console.log(data);
          this.searchedUserData=data["data"];
          this.sendSUD(this.searchedUserData);
        },
        error=>{
          console.log("some error occured");
          console.log(error);
        }
      );
    } // end condition
  } // end addNewFriendFunction

  public sendSUD: any = (searchedUserData) => {
      let notificationMsgObject = {
        senderName: this.userInfo.firstName + " " + this.userInfo.lastName,
        senderId: this.userInfo.userId,
        receiverName: searchedUserData.firstName + " " + searchedUserData.lastName,
        receiverId: searchedUserData.userId,
        message:  this.userInfo.firstName + " " + this.userInfo.lastName+" has added " +searchedUserData.firstName + " " + searchedUserData.lastName+ " as friend.",
        createdOn: new Date()
      } // end notificationMsgObject
      console.log(notificationMsgObject);

      this.cookieService.set('receiverId', searchedUserData.userId );
      this.cookieService.set('receiverName', searchedUserData.firstName + " " + searchedUserData.lastName);
   
      this.SocketService.SendNotificationMessage(notificationMsgObject)
      this.pushToNotificationWindow(notificationMsgObject);
  } // end sendMessage

  public logout: any = () => {

    this.AppService.logout()
      .subscribe((apiResponse) => {

        if (apiResponse.status === 200) {
          console.log("logout called")
          this.cookieService.delete('authtoken');

          this.cookieService.delete('receiverId');

          this.cookieService.delete('receiverName');

          this.SocketService.exitSocket()

          this.router.navigate(['/']);

        } else {
          this.toastr.error(apiResponse.message)

        } // end condition

      }, (err) => {
        this.toastr.error('some error occured')


      });

  } // end logout

}

