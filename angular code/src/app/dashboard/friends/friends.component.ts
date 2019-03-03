import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../app.service';
import { SocketService } from './../../socket.service';
import {ToastrService} from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  public email: any;
  public searchedUserData : any;
  
  public authToken: any;
  public userInfo: any;
  public liveUserInfo:any;
  public userList: any = [];
  public receiverId: any;
  public receiverName: any;
  public scrollToNotificationTop:boolean= false;
  public messageList: any = []; // stores the current message list display in notification box

  public disconnectedSocket: boolean;  

  constructor(public AppService: AppService,public SocketService: SocketService,public router: Router,private toastr: ToastrService,private cookieService: CookieService) {}

  ngOnInit() {

    this.authToken = this.cookieService.get('authtoken');

    this.userInfo = this.AppService.getUserInfoFromLocalstorage();

    this.receiverId = this.cookieService.get("receiverId");

    this.receiverName =  this.cookieService.get('receiverName');

    this.AppService.getSingleUserData(this.userInfo.userId).subscribe(
      data =>{
      
        this.liveUserInfo=data["data"];
        console.log(this.liveUserInfo);
        this.getOnlineUserList(this.liveUserInfo);
      },
      error=>{
        console.log("some error occured");
        console.log(error);
      }
    ); 

    this.verifyUserConfirmation();
 
    this.getMessageFromAUser();
  }

  public goToDashboard: any = () => {

    this.router.navigate(['/dashboard']);

  } 
  public goToNotifications: any = () => {

    this.router.navigate(['/notifications']);

  } 
  public verifyUserConfirmation: any = () => {
    this.SocketService.verifyUser().subscribe((data) => {
      this.disconnectedSocket = false;
      this.SocketService.setUser(this.authToken);
    });
  }

  public getOnlineUserList :any =(liveFriendInfo)=>{
    this.SocketService.onlineUserList().subscribe((userList) => {
      this.userList = [];
      for (let x in userList) {
        for(let y = 0; y < liveFriendInfo.friends.length; y++){
          let friend = liveFriendInfo.friends[y].userId; 
          if(friend==x){
            let temp = { 'userId': x, 'name': userList[x] };
            this.userList.push(temp);
          } 
        }            
      }
      console.log(this.userList);
    }); // end online-user-list
  }
  // notification related methods 

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
      this.AppService.searchUser(data)
      .subscribe((apiResponse) => {

        if (apiResponse.status === 200) {
          this.searchedUserData=apiResponse.data;
          this.sendSUD(this.searchedUserData);
          this.toastr.success(apiResponse.message)
          setTimeout(()=>{
            window.location.reload();
          },2000)

        } else {
          this.toastr.error(apiResponse.message)

        } // end condition

      }, (err) => {
        this.toastr.error('some error occured')
      });
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
      this.SocketService.SendNotificationMessage(notificationMsgObject);
  } // end sendMessage
}