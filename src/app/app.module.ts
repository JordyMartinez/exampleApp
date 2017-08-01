import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SMS } from '@ionic-native/sms';
import { GoogleMaps } from '@ionic-native/google-maps';

import { LoginPage } from '../pages/login/login';
import { MentorsPage } from '../pages/mentors/mentors';
import { EngineeringMentorsPage } from '../pages/engineering-mentors/engineering-mentors';
import { GraphicsMentorsPage } from '../pages/graphics-mentors/graphics-mentors';
import { MathMentorsPage } from '../pages/math-mentors/math-mentors';
import { PhysicsMentorsPage } from '../pages/physics-mentors/physics-mentors';
import { TheaterMentorsPage } from '../pages/theater-mentors/theater-mentors';
import { MentorProfilePage } from '../pages/mentor-profiles/mentor-profiles';
import { MajorsPage } from '../pages/majors/majors';
import { SearchPage } from'../pages/search/search';
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
