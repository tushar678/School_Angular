import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { UserEditComponent } from 'app/user-edit/user-edit.component';
import { UserAddComponent } from 'app/user-add/user-add.component';
import { DashboardAddComponent } from 'app/dashboard-add/dashboard-add.component';
import { DashboardEditComponent } from 'app/dashboard-edit/dashboard-edit.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from 'app/login/login.component';
import { TableListAddComponent } from 'app/table-list-add/table-list-add.component';
import { TableListEditComponent } from 'app/table-list-edit/table-list-edit.component';
import { TeacherEditComponent } from 'app/teacher-edit/teacher-edit.component';
import { TeacherAddComponent } from 'app/teacher-add/teacher-add.component';
import { ClassEditComponent } from 'app/class-edit/class-edit.component';
import { ClassAddComponent } from 'app/class-add/class-add.component';
import { StudentsComponent } from 'app/students/students.component';
import { StudentsAddComponent } from 'app/students-add/students-add.component';
import { StudentsEditComponent } from 'app/students-edit/students-edit.component';
import { ParentsAddComponent } from 'app/parents-add/parents-add.component';
import { StTeacherAddComponent } from 'app/st-teacher-add/st-teacher-add.component';
import { StTeacherEditComponent } from 'app/st-teacher-edit/st-teacher-edit.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    // {
    //     path: '',
    // component: AdminLayoutComponent,
    // children: [{
    //   path: '',
    //   children: [
    //      {​​​ path:'dashboard', loadChildren:'./dashboard/dashboard.module#DashboardModule' }​​​,

    //   ]
    // },

    // ]}
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'dashboard-add',  component: DashboardAddComponent },
    { path: 'dashboard-edit', component: DashboardEditComponent },
    { path: 'teacher-edit',   component: TeacherEditComponent },
    { path: 'teacher-add',    component: TeacherAddComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'user-edit',      component: UserEditComponent },
    { path: 'user-add',       component: UserAddComponent },
    { path: 'class-edit',     component: ClassEditComponent },
    { path: 'class-add',      component: ClassAddComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'table-list-add', component: TableListAddComponent },
    { path: 'table-list-edit',component: TableListEditComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'students',       component: StudentsComponent},
    { path: 'students-add',   component: StudentsAddComponent},
    { path: 'students-edit',  component: StudentsEditComponent},
    { path: 'parents-add',    component: ParentsAddComponent},
    { path: 'st-teacher-add', component: StTeacherAddComponent},
    { path: 'st-teacher-edit',component: StTeacherEditComponent},
  //{ path: 'login',          component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forChild(AdminLayoutRoutes)],
    exports: [RouterModule]
})

export class LayoutRoutingModule { }