import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPageModule } from '../pages/login/login.module';
import { UserProfilePageModule } from '../pages/user/user-profile/user-profile.module';
import { UserEditPageModule } from '../pages/user/user-edit/user-edit.module';
import { UserSettingPageModule } from '../pages/user/user-setting/user-setting.module';
import { UserSettingPage } from '../pages/user/user-setting/user-setting';
import { UserEditPage } from '../pages/user/user-edit/user-edit';
import { AdminTabsPageModule} from '../pages/admin/admin-tabs/admin-tabs.module';
import { AdminTabsPage} from '../pages/admin/admin-tabs/admin-tabs';
import { AdminHomePage} from '../pages/admin/admin-home/admin-home';
import { AdminHomePageModule} from '../pages/admin/admin-home/admin-home.module';
import { AdminListPage} from '../pages/admin/admin-list/admin-list';
import { AdminListPageModule} from '../pages/admin/admin-list/admin-list.module';
import { AdminSettingPage} from '../pages/admin/admin-setting/admin-setting';
import { AdminSettingPageModule} from '../pages/admin/admin-setting/admin-setting.module';
import {Facebook} from '@ionic-native/facebook';
import firebase from 'firebase';

export const firebaseConfig={  
  apiKey: "AIzaSyCjTUixYv189FGdP3hQdztU_HCbtqvjJTU",
  authDomain: "meetr-e4a7c.firebaseapp.com",
  databaseURL: "https://meetr-e4a7c.firebaseio.com",
  projectId: "meetr-e4a7c",
  storageBucket: "meetr-e4a7c.appspot.com",
  messagingSenderId: "400578335773"
}
firebase.initializeApp(firebaseConfig)

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    UserProfilePageModule,
    UserEditPageModule,
    UserSettingPageModule,
    AdminTabsPageModule,
    AdminHomePageModule,
    AdminListPageModule,
    AdminSettingPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserEditPage,
    UserSettingPage,
    AdminTabsPage,
    AdminHomePage,
    AdminListPage,
    AdminSettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
