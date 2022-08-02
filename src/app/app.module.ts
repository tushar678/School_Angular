import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';
import { DashboardAddComponent } from './dashboard-add/dashboard-add.component';
import { DashboardEditComponent } from './dashboard-edit/dashboard-edit.component';
import { TableListAddComponent } from './table-list-add/table-list-add.component';
import { TableListEditComponent } from './table-list-edit/table-list-edit.component';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { ClassAddComponent } from './class-add/class-add.component';
import { ClassEditComponent } from './class-edit/class-edit.component';
import { StudentsComponent } from './students/students.component';
import { StudentsAddComponent } from './students-add/students-add.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule, MatDatepickerToggle, MatDatepickerToggleIcon } from '@angular/material/datepicker';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { ParentsAddComponent } from './parents-add/parents-add.component';
import { StTeacherAddComponent } from './st-teacher-add/st-teacher-add.component';
import { StTeacherEditComponent } from './st-teacher-edit/st-teacher-edit.component';
import { DatePipe} from '@angular/common';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    ComponentsModule,
    RouterModule,
    MatButtonModule,
    MatRippleModule,
    MatTooltipModule,
    MatSelectModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDatepickerModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    UserEditComponent,
    UserAddComponent,
    DashboardAddComponent,
    DashboardEditComponent,
    TableListAddComponent,
    TableListEditComponent,
    TeacherAddComponent,
    TeacherEditComponent,
    ClassAddComponent,
    ClassEditComponent,
    StudentsComponent,
    StudentsAddComponent,
    StudentsEditComponent,
    ParentsAddComponent,
    StTeacherAddComponent,
    StTeacherEditComponent
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
