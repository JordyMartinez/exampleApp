import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SMS } from '@ionic-native/sms';
import { GoogleMaps } from '@ionic-native/google-maps';

import { LoginPage } from '../pages/login/login';
import { MentorsPage } from '../pages/mentors/mentors';
import { MentorProfilePage } from '../pages/mentor-profiles/mentor-profiles';
import { MajorsPage } from '../pages/majors/majors';
import { SearchPage } from'../pages/search/search';
import { ChrisCohenPage } from '../pages/chris-cohen/chris-cohen';
import { ChrisMapPage } from '../pages/chris-map/chris-map';
import { VanessaSlopPage } from '../pages/vanessa-slop/vanessa-slop';
import { SignUpPage } from '../pages/signup/signup';
import { EditPage } from'../pages/edit/edit';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MentorsProvider } from '../providers/mentors/mentors';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    // MenuPage,
    MentorsPage,
    MajorsPage,
    SearchPage,
    ChrisCohenPage,
    ChrisMapPage,
    VanessaSlopPage,
    SignUpPage,
    MentorProfilePage,
    EditPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    // MenuPage,
    MentorsPage,
    MajorsPage,
    SearchPage,
    ChrisCohenPage,
    ChrisMapPage,
    VanessaSlopPage,
    SignUpPage,
    MentorProfilePage,
    EditPage,
    TabsPage
  ],
  providers: [
    SMS,
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MentorsProvider
  ]
})
export class AppModule {}
