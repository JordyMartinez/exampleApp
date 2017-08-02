import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SMS } from '@ionic-native/sms';
import { GoogleMaps } from '@ionic-native/google-maps';

import { LoginPage } from '../pages/login/login';
import { MentorsPage } from '../pages/mentors/mentors';
<<<<<<< HEAD
import { EngineeringMentorsPage } from '../pages/engineering-mentors/engineering-mentors';
import { GraphicsMentorsPage } from '../pages/graphics-mentors/graphics-mentors';
import { MathMentorsPage } from '../pages/math-mentors/math-mentors';
import { PhysicsMentorsPage } from '../pages/physics-mentors/physics-mentors';
import { TheaterMentorsPage } from '../pages/theater-mentors/theater-mentors';
import { MentorProfilePage } from '../pages/mentor-profiles/mentor-profiles';
import { MajorsPage } from '../pages/majors/majors';
import { SearchPage } from'../pages/search/search';
import { SignUpPage } from '../pages/signup/signup';
import { MentorRequestsPage }from '../pages/mentor-requests/mentor-requests';
import { EditPage } from'../pages/edit/edit';
import { RequestPage }from '../pages/request/request';
=======
import { MentorProfilePage } from '../pages/mentor-profiles/mentor-profiles';
import { MajorsPage } from '../pages/majors/majors';
import { SearchPage } from'../pages/search/search';
//import { ChrisCohenPage } from '../pages/chris-cohen/chris-cohen';
//import { ChrisMapPage } from '../pages/chris-map/chris-map';
//import { VanessaSlopPage } from '../pages/vanessa-slop/vanessa-slop';
import { SignUpPage } from '../pages/signup/signup';

>>>>>>> 473df12460e223293d8bf70da47f26cac6eda53c
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MentorsProvider } from '../providers/mentors/mentors';
<<<<<<< HEAD
=======
import { MenteesProvider } from '../providers/mentees/mentees';
>>>>>>> 473df12460e223293d8bf70da47f26cac6eda53c

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
<<<<<<< HEAD
    MentorsPage,
    EngineeringMentorsPage,
    MathMentorsPage,
    GraphicsMentorsPage,
    PhysicsMentorsPage,
    TheaterMentorsPage,
    MajorsPage,
    SearchPage,
    SignUpPage,
    MentorProfilePage,
    EditPage,
    RequestPage,
    MentorRequestsPage,
=======
    // MenuPage,
    MentorsPage,
    MajorsPage,
    SearchPage,
//    ChrisCohenPage,
//    ChrisMapPage,
//    VanessaSlopPage,
    SignUpPage,
    MentorProfilePage,
>>>>>>> 473df12460e223293d8bf70da47f26cac6eda53c
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
<<<<<<< HEAD
    MentorsPage,
    EngineeringMentorsPage,
    MathMentorsPage,
    GraphicsMentorsPage,
    PhysicsMentorsPage,
    TheaterMentorsPage,
    MajorsPage,
    MajorsPage,
    SearchPage,
    SignUpPage,
    MentorProfilePage,
    EditPage,
    RequestPage,
    MentorRequestsPage,
=======
    // MenuPage,
    MentorsPage,
    MajorsPage,
    SearchPage,
//    ChrisCohenPage,
//    ChrisMapPage,
//    VanessaSlopPage,
    SignUpPage,
    MentorProfilePage,
>>>>>>> 473df12460e223293d8bf70da47f26cac6eda53c
    TabsPage
  ],
  providers: [
    SMS,
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
<<<<<<< HEAD
    MentorsProvider
=======
    MentorsProvider,
    MenteesProvider
>>>>>>> 473df12460e223293d8bf70da47f26cac6eda53c
  ]
})
export class AppModule {}
