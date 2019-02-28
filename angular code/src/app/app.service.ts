import { Injectable } from '@angular/core';
//import observable related code
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';


//importing http client to make the request
import {HttpClient,HttpHeaders} from '@angular/common/http';
import{HttpErrorResponse,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url='http://localhost:3000/api/v1';

  constructor(private http:HttpClient, private cookieService:CookieService) { }

  public signupFunction(data):Observable<any>{
    const params = new HttpParams()
    .set('firstName' , data.firstName)
    .set('lastName' , data.lastName)
    .set('mobile' , data.mobile)
    .set('email' , data.email)
    .set('password' , data.password)
    .set('apiKey' , data.apiKey);

    return this.http.post(`${this.url}/users/signup`,params);
  }//end of signupFunction

  public signinFunction(data):Observable<any>{
    const params = new HttpParams()
    .set ('email', data.email)
    .set('password',data.password);
    return this.http.post(`${this.url}/users/login`,params);
  }
  public forgotPasswordFunction(data):Observable<any>{
    const params = new HttpParams()
    .set ('email', data.email)
    return this.http.post(`${this.url}/users/forgot_password`,params);
  }

  public resetPasswordFunction(data):Observable<any>{
    const params = new HttpParams()
    .set ('password', data.password)
    return this.http.put(`${this.url}/users/reset_password`,params);
  }

  public getUserInfoFromLocalstorage=()=>{
    return JSON.parse(localStorage.getItem('userInfo'));
  }
  public setUserInfoInLocalStorage=(data)=>{
    localStorage.setItem('userInfo',JSON.stringify(data));
  }
  public logout(): Observable<any> {
    const params = new HttpParams()
      .set('authToken',this.cookieService.get('authtoken'))
    return this.http.post(`${this.url}/users/logout`, params);
  } // end logout function

  //function to search for a user
  public searchUser(data):Observable<any>{
    const params = new HttpParams()
    .set('authToken',this.cookieService.get('authtoken'))
    .set('email',data.email)
    return this.http.post(`${this.url}/users/search_people`,params);
  }
  public getSingleUserData(userId):Observable<any>{
    const params = new HttpParams()
    .set('authToken',this.cookieService.get('authtoken'))
    return this.http.get(`${this.url}/users/details/`+userId, {params:params});
  }

  //******************************Dashboard Routes***************************/
  
  public allTasksFunction(): Observable<any>{
    const params= new HttpParams() 
    .set('authToken', this.cookieService.get('authtoken'))
    return this.http.get(`${this.url}/dashboard`, {params:params});
  }
  
  //function to create task
  public createTask(title,subTask,status,dueDate,priority): Observable<any>{
    const params = new HttpParams()
    .set('authToken',this.cookieService.get('authtoken'))
    .set('task' , title) 
    .set('subTask' , subTask)
    .set('status' , status)
    .set('dueDate' , dueDate)
    .set('priority' , priority)
    return this.http.post(`${this.url}/dashboard/create`,params);  
  }

  //function to display single task
  public getSingleTaskInformation(currentTaskId): Observable<any>{
    const params= new HttpParams() 
    .set('authToken', this.cookieService.get('authtoken'))
    return this.http.get(`${this.url}/dashboard/view/`+currentTaskId, {params:params});
  }

  //function to delete task
   public deleteTask(taskId): Observable<any>{
    const params = new HttpParams()
    .set('authToken',this.cookieService.get('authtoken'))
    .set('taskId' , taskId)
    .set('data', null)
    return this.http.post(`${this.url}/dashboard/`+taskId+'/delete',params);
  }
  //function to edit task
  public editTask(title,subTask,status,dueDate,priority,taskId): Observable<any>{
    const params = new HttpParams()
    .set('authToken',this.cookieService.get('authtoken'))
    .set('task' , title) 
    .set('subTask' , subTask)
    .set('status' , status)
    .set('dueDate' , dueDate)
    .set('priority' , priority)
    return this.http.put(`${this.url}/dashboard/`+taskId+'/edit',params);
  }
  //function to add yourself as watcher
  public addYourselfFunction(taskId):Observable<any>{
    const params = new HttpParams()
    .set('authToken',this.cookieService.get('authtoken'))
    return this.http.post(`${this.url}/dashboard/`+taskId+'/viewers',params);
  }
  //function to add others as watcher
  public taskWatchersFunction(taskId,watcherEmail):Observable<any>{
    const params = new HttpParams()
    .set('authToken',this.cookieService.get('authtoken'))
    .set('addOtherViewer',watcherEmail)
    return this.http.post(`${this.url}/dashboard/`+taskId+'/otherViewers',params);
  }

  

  //exception handler
  private handleError(err: HttpErrorResponse){
    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    return Observable.throw(errorMessage);

  }
}
