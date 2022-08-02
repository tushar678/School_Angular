import { Component, NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardEditComponent } from './dashboard-edit/dashboard-edit.component';
import { DashboardAddComponent } from './dashboard-add/dashboard-add.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';
import { ClassEditComponent } from './class-edit/class-edit.component';
import { ClassAddComponent } from './class-add/class-add.component';
import { TableListComponent } from './table-list/table-list.component';
import { TableListAddComponent } from './table-list-add/table-list-add.component';
import { TableListEditComponent } from './table-list-edit/table-list-edit.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AdminLayoutRoutes } from './layouts/admin-layout/admin-layout.routing';

const routes: Routes =[
  // {
  //   path: '',
  //   redirectTo: 'user-profile',
  //   pathMatch: 'full',
  // }, {
  //   path: '',
  //   component: AdminLayoutComponent,
  //   children: [{
  //     path: '',
  //     loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
  //   }]
  //  }
  
  { path: '',   component: LoginComponent, pathMatch: 'full'},
  { path: '',   component: DashboardComponent, redirectTo:'dashboard'},
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  { path: 'login', component: LoginComponent}
 ];
  
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
