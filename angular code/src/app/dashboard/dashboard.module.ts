import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskViewComponent } from './task-view/task-view.component';
import {NotificationsComponent} from './notifications/notifications.component'
import { SharedModule } from '../shared/shared.module';
import { RemoveSpecialCharPipe } from './../shared/pipe/remove-special-char.pipe';

import { RouterModule, Routes } from '@angular/router';
import { ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { DashboardRouteGuardService } from './dashboard-route-guard.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field'
import { CdkTableModule} from '@angular/cdk/table';

import {DemoMaterialModule} from './material-module';
import {MatNativeDateModule} from '@angular/material';
import {MAT_DATE_LOCALE} from '@angular/material/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    CdkTableModule,
    MatNativeDateModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([ 
      { path: 'dashboard', component: DashboardPageComponent},
      { path:'task/:taskId', component: TaskViewComponent},
      { path:'create', component:TaskCreateComponent},
      { path: 'notifications', component: NotificationsComponent}   
    ])
  ],
  declarations: [
    DashboardPageComponent,
    TaskCreateComponent, 
    TaskViewComponent, 
    NotificationsComponent,
    RemoveSpecialCharPipe
  ],
  providers:[DashboardRouteGuardService,{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}]
})
export class DashboardModule { }

