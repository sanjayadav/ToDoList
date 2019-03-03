import {Component,OnInit,ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AppService } from './../../app.service';
import {SocketService} from './../../socket.service'
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

 @Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.css']
  })
  export class DashboardPageComponent implements OnInit {

    public authToken: any;
    public userInfo: any;
    public receiverId:any;
    public receiverName:any;
    public tasks:TaskData[] = [];
    public messageList: any =[];
    displayedColumns = ['task', 'status', 'duedate','priority'];
    dataSource: MatTableDataSource<TaskData>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

  constructor(public AppService: AppService,
    public router: Router,
    private toastr: ToastrService,
    private cookieService: CookieService,
    private SocketService: SocketService) {}

  ngOnInit() {

    //Authenticate User
    this.authToken = this.cookieService.get('authtoken');

    this.userInfo = this.AppService.getUserInfoFromLocalstorage();

    this.receiverId = this.cookieService.get("receiverId");

    this.receiverName =  this.cookieService.get('receiverName');

    //Dashboard Table
    // Assign the data to the data source for the table to render
   
    this.AppService.allTasksFunction().subscribe(
      data =>{  
        console.log(data)
        this.tasks=data["data"];
        this.dataSource = new MatTableDataSource(this.tasks);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error=>{
        console.log("some error occured");
        console.log(error);
      }
    );
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  public getMessageFromAUser :any =()=>{

    this.SocketService.notificationByUserId(this.userInfo.userId)
    .subscribe((data)=>{
     
      (this.receiverId==data.senderId)?this.messageList.push(data):'';

      this.toastr.success(`${data.message}`)

    });//end subscribe

  }// end get message from a user 

  public goToNotifications: any = () => {
    this.router.navigate(['/notifications']);
  } 

  public goToFriends: any = () => {
    this.router.navigate(['/friends']);
  } 
  
  public logout: any = () => {

    this.AppService.logout()
      .subscribe((apiResponse) => {

        if (apiResponse.status === 200) {
          console.log("logout called")
          this.cookieService.delete('authtoken');

          this.cookieService.delete('receiverId');

          this.cookieService.delete('receiverName');
          
          this.cookieService.delete('session');

          this.cookieService.delete('session.sig');

          this.router.navigate(['/home']);

        } else {
          this.toastr.error(apiResponse.message)

        } // end condition

      }, (err) => {
        this.toastr.error('some error occured')

      });

  } // end logout

}


export interface TaskData {
  task: string;
  status: string; 
  duedate: string;
  priority: string;
}
