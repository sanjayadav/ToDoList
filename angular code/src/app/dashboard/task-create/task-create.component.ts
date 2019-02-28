import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { CookieService } from 'ngx-cookie-service';
import{Location} from '@angular/common';
import{ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  public authToken: any;
  public userInfo: any;
  taskForm: FormGroup;
  constructor(private AppService:AppService, private _route:ActivatedRoute, private router: Router,private toastr: ToastrService,private location:Location,private cookieService:CookieService, public fb:FormBuilder) {}

  ngOnInit() {
    //Authenticate User
    this.authToken = this.cookieService.get('authtoken');

    this.userInfo = this.AppService.getUserInfoFromLocalstorage();
   
    this.taskForm = this.fb.group({
        taskTitle:['',Validators.required],
        subTaskTitle: this.fb.array([]),
        taskStatus:'',
        taskPriority:'',
        taskDueDate:'',
        
    });
  }
  get taskTitle() {
    return this.taskForm.get('taskTitle');
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

  public createTask():any{
 
    let task= this.taskForm.value; 
    // console.log(task)
    
    let title = task.taskTitle;
    let dueDate = task.taskDueDate;
    let status = task.taskStatus;
    let priority = task.taskPriority;
    let subTask = JSON.stringify(task.subTaskTitle);
    console.log(title,subTask,status,dueDate,priority)
    this.AppService.createTask(title,subTask,status,dueDate,priority).subscribe(

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

  } // end logout;
  

}



