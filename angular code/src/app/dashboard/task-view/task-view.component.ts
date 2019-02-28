import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { AppService } from '../../app.service';
import{Location} from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import {ToastrService} from 'ngx-toastr';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  public currentTask;
  public currentTaskComments;
  public authToken: any;
  public userInfo: any;
  public data:any;
  taskForm: FormGroup;
  constructor(private _route:ActivatedRoute, private router:Router, public AppService:AppService,private location:Location, private cookieService:CookieService, private toastr:ToastrService,private fb: FormBuilder) 
  { }
  
  ngOnInit() {
    //Authenticate User
    this.authToken = this.cookieService.get('authtoken');
    this.userInfo = this.AppService.getUserInfoFromLocalstorage();

    let myTaskId = this._route.snapshot.paramMap.get('taskId');

    this.AppService.getSingleTaskInformation(myTaskId).subscribe(
      data =>{
        console.log(data);
        this.currentTask=data["data"];
      },
      error=>{
        console.log("some error occured");
        console.log(error);
      }
    );
    this.taskForm = this.fb.group({
      taskTitle:['',Validators.required],
      subTaskTitle: this.fb.array([]),
      taskStatus:'',
      taskPriority:'',
      taskDueDate:'',
    });
    this.setExistingTask();
  }
  get taskTitle() {
    return this.taskForm.get('taskTitle');
  }
  setExistingTask(){
    let myTaskId = this._route.snapshot.paramMap.get('taskId');

    this.AppService.getSingleTaskInformation(myTaskId).subscribe(
      data =>{
        this.currentTask=data["data"];
        this.taskForm.patchValue({
          taskTitle:this.currentTask.task,
          subTaskTitle:this.setExistingSubTask(),
          taskStatus:this.currentTask.status,
          taskPriority:this.currentTask.priority,
          taskDueDate:this.currentTask.dueDate 
        });
      },
      error=>{
        console.log("some error occured");
        console.log(error);
      }
    );

  }
  setExistingSubTask(){
    let myTaskId = this._route.snapshot.paramMap.get('taskId');

    this.AppService.getSingleTaskInformation(myTaskId).subscribe(
      data =>{
        this.currentTask=data["data"];
        let control = <FormArray>this.taskForm.controls.subTaskTitle;
        this.currentTask.subTask.forEach(x => {
          control.push(this.fb.group({ 
            newSubTaskTitle:x.title,
            subSubTaskTitle: this.setExistingSubSubTask(x)
           }));
        });
      },
      error=>{
        console.log("some error occured");
        console.log(error);
      }
    );
  }
  
  setExistingSubSubTask(s){
    let arr = new FormArray([]);
    s.subSubTask.forEach(y => {
      arr.push(this.fb.group({ 
       newSubSubTaskTitle: y.title 
      }));
    });
    return arr;
  }
  
  addSubTask() {
    let control = <FormArray>this.taskForm.controls.subTaskTitle;
    control.push(
      this.fb.group({
        newSubTaskTitle: '',
        subSubTaskTitle: this.fb.array([])
      })
    )
  }
  
  deleteSubTask(index) {
    const control = <FormArray>this.taskForm.controls.subTaskTitle;
    control.removeAt(index);
  }
  
  addSubSubTask(control) {
    control.push(
      this.fb.group({
        newSubSubTaskTitle: ''
    }))
  }

  deleteSubSubTask(control, index) {
    control.removeAt(index)
  }

  public viewNotifications():any{
    this.router.navigate(['/notifications/'+this.currentTask.taskId]);
  }
  public editTask():any{
 
    let task= this.taskForm.value; 
  
    let title = task.taskTitle;
    let dueDate = task.taskDueDate;
    let status = task.taskStatus;
    let priority = task.taskPriority;
    let subTask = JSON.stringify(task.subTaskTitle);
    let taskId = this.currentTask.taskId;
    console.log(title,subTask,status,dueDate,priority)
    this.AppService.editTask(title,subTask,status,dueDate,priority,taskId).subscribe(

      data=>{
        console.log("task created");
        console.log(data);
        this.toastr.success('Task Created','Success');
        setTimeout(()=>{
          this.router.navigate(['/dashboard']);
        },1000)
      },
      error=>{
        console.log("some error occured");
        console.log(error);
        alert("Some error occured.");
      }
    )
  }
  public deleteThisTask():any{
    this.AppService.deleteTask(this.currentTask.taskId).subscribe(
      data=>{
        console.log(data);
        this.toastr.success("Issuse Deleted Successfully.");
        setTimeout(()=>{
          this.router.navigate(['/dashboard']);
        },1000)
      },

      error=>{
        console.log("Some error occured.");
        console.log(error); 
        this.toastr.error(error);
      }
    )
  }

  public goBackToPreviousPage():any{
    this.location.back();
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

  ngOnDestroy() {
  }

}

