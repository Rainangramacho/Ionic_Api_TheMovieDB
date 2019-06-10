import { PosLoginPage } from './../pages/pos-login/pos-login';
import { LoginPage } from './../pages/login/login';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CreateAccountPage } from './../pages/create-account/create-account';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {HttpModule} from "@angular/http";



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module';
import { FeedSeriesPageModule } from '../pages/feedseries/feedseries.module';

import { IntroPageModule } from '../pages/intro/intro.module';
import { UserListPageModule } from './../pages/user-list/user-list.module';
import { MoovieProvider } from '../providers/moovie/moovie';
import { UsersProvider } from '../providers/users/users';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CreateAccountPage,
    PosLoginPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    FeedSeriesPageModule,
    IntroPageModule,
    HttpModule,
    UserListPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CreateAccountPage,
    PosLoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoovieProvider,
    UsersProvider,
    AuthServiceProvider
  ]
})
export class AppModule {}
