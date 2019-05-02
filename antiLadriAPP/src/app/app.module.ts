import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ConexionUsuariosPage } from '../app/conexion-usuarios/conexion-usuarios.page';
import {ConexionUsuariosPageModule} from '../app/conexion-usuarios/conexion-usuarios.module';

import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [ConexionUsuariosPage],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    ConexionUsuariosPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,  
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Gyroscope,
    DeviceMotion,
    Flashlight,
    AndroidPermissions
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
