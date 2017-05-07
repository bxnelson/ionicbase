import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { StylistData } from '../providers/stylist-data';
import { routing,
         appRoutingProviders } from './app.routes';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../firebase/index';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    routing,
        AngularFireModule.initializeApp(firebaseConfig)
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    appRoutingProviders,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
