import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';
import {Observable} from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

import {catchError, tap} from 'rxjs/operators';


//importing http client to make the request
import {HttpClient,HttpHeaders} from '@angular/common/http';
import{HttpErrorResponse,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private url='http://localhost:3000/api/v1/notifications';
  private socket;

  constructor(public http:HttpClient,private cookieService: CookieService ) { 
    //connection is being created
    this.socket=io(this.url);
  }

  // events to be listened 
  
  public verifyUser = () => {

    return Observable.create((observer) => {

      this.socket.on('verifyUser', (data) => {

        observer.next(data);

      }); // end Socket

    }); // end Observable

  } // end verifyUser

  public onlineUserList = () => {

    return Observable.create((observer) => {

      this.socket.on("online-user-list", (userList) => {

        observer.next(userList);

      }); // end Socket

    }); // end Observable

  } // end onlineUserList


  public disconnectedSocket = () => {

    return Observable.create((observer) => {

      this.socket.on("disconnect", () => {

        observer.next();

      }); // end Socket

    }); // end Observable



  } // end disconnectSocket

  // end events to be listened

  // events to be emitted

  public setUser = (authToken) => {

    this.socket.emit("set-user", authToken);

  } // end setUser
  public markNotificationAsSeen = (userDetails) => {

    this.socket.emit('mark-notification-as-seen', userDetails);

  } // end markNotificationAsSeen

  // events to be emitted

 // notification related methods 

  public getNotification(senderId,receiverId, skip): Observable<any> {

    return this.http.get(`${this.url}/get/for/user?senderId=${senderId}&receiverId=${receiverId}&skip=${skip}&authToken=${this.cookieService.get('authtoken')}`)
      .pipe(tap(data => console.log('Data Received')),
            catchError(this.handleError));

  } 

  public getGroupNotification(notificationRoom, skip): Observable<any> {
    return this.http.get(`${this.url}/get/for/group?notificationRoom=${notificationRoom}&skip=${skip}&authToken=${this.cookieService.get('authtoken')}`)
      .pipe(tap(data => console.log('Data Received')),
            catchError(this.handleError));

  } 

  public notificationByUserId = (userId) => {

    return Observable.create((observer) => {
      
      this.socket.on(userId, (data) => {

        observer.next(data);

      }); // end Socket

    }); // end Observable

  } // end notificationByUserId

  public SendNotificationMessage = (notificationMsgObject) => {

    this.socket.emit('notification-msg', notificationMsgObject);

  } // end getNotificationMessage


  public exitSocket = () =>{


    this.socket.disconnect();


  }// end exit socket

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    return Observable.throw(errorMessage);

  }  // END handleError

}


