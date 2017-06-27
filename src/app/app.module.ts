import { NgModule } from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SchedulePage } from '../pages/schedule/schedule';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { ActiveProjects } from '../pages/active-projects/active-projects';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { DocumentPage } from '../pages/documents/documents';
import { MessagePage } from '../pages/messages/messages';
import { TeamPage } from '../pages/team/team';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { ProjectDetailPage } from '../pages/project-detail/project-detail';
import { ProjectsPage } from '../pages/projects/projects';
import { NewProjectPage } from '../pages/projects/new-project/new-project';
import { BidsPage } from '../pages/bids/bids';
import { BidDetailPage } from '../pages/bid-detail/bid-detail';
import { AuthService } from '../providers/auth-service';

@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    TutorialPage,
    LoginPage,
    SchedulePage,
    ProjectsPage,
    SignupPage,
    TabsPage,
    ProjectDetailPage,
    BidsPage,
    BidDetailPage, 
    ActiveProjects,
    NewProjectPage, DocumentPage, MessagePage, TeamPage, SchedulePage
  ],
  imports: [
    IonicModule.forRoot(ConferenceApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    TutorialPage,
    SchedulePage,
    ProjectsPage,
    SignupPage,
    TabsPage,
    ProjectDetailPage,
    BidsPage,
    BidDetailPage, ActiveProjects, NewProjectPage, DocumentPage, MessagePage, TeamPage, SchedulePage
  ],
  providers: [ConferenceData, UserData, Storage, AuthService]
})
export class AppModule {}
