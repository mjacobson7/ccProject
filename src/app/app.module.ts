import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { NavService } from '../app/services/nav/nav.service';
import { DataService } from '../app/services/data/data.service';
import { UserService } from '../app/services/user-auth/user-auth.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppErrorHandler } from './common/app-error-handler';
import { RouterModule } from '@angular/router';
import {DataTableModule, SharedModule, ChartModule, FileUploadModule, ChipsModule, PanelModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HeaderComponent } from './components/header/header.component';
import { ChartsComponent } from './components/charts/charts.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CustomerSatisfactionComponent } from './components/customer-satisfaction/customer-satisfaction.component';
import { SupervisorEvaluationsComponent } from './components/supervisor-evaluations/supervisor-evaluations.component';
import { MyTeamComponent } from './components/my-team/my-team.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AccountComponent } from './components/account/account.component';
import { GlobalSettingsComponent } from './components/global-settings/global-settings.component';
import { TablesComponent } from './components/tables/tables.component';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavComponent,
    DashboardComponent,
    SignInComponent,
    HeaderComponent,
    ChartsComponent,
    UserProfileComponent,
    CustomerSatisfactionComponent,
    SupervisorEvaluationsComponent,
    MyTeamComponent,
    ManageUsersComponent,
    ReportsComponent,
    AccountComponent,
    GlobalSettingsComponent,
    TablesComponent,
    MessagesComponent
    ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    ChartsModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    SharedModule,
    ChartModule,
    FileUploadModule,
    ChipsModule,
    PanelModule,
    RouterModule.forRoot([
      {
        path: 'myprofile',
        component: UserProfileComponent,
      },
      {
        path: 'messages',
        component: MessagesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'customersatisfaction',
        component: CustomerSatisfactionComponent
      },
      {
        path: 'supervisorevaluations',
        component: SupervisorEvaluationsComponent
      },
      {
        path: 'myteam',
        component: MyTeamComponent
      },
      {
        path: 'manageusers',
        component: ManageUsersComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      },
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'globalsettings',
        component: GlobalSettingsComponent
      },
    ])
  ],
  providers: [
    DataService,
    UserService, 
    NavService,
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
