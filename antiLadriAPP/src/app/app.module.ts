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

import { Gyroscope, GyroscopeOrientation, GyroscopeOptions, GyroscopeOriginal } from '@ionic-native/gyroscope';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';



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
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
