import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component';
import { HttpModule } from "@angular/http";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PosLoginPage } from './../pages/pos-login/pos-login';
import { LoginPage } from './../pages/login/login';
import { CreateAccountPage } from './../pages/create-account/create-account';
import { HomePage } from '../pages/home/home';
import { FeedPageModule } from '../pages/feed/feed.module';
import { FeedSeriesPageModule } from '../pages/feedseries/feedseries.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { MoovieProvider } from '../providers/moovie/moovie';
import { UsersProvider } from '../providers/users/users';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
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
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
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
  ]
})
export class AppModule {}
