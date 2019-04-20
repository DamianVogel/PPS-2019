import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MenuPage} from '../app/menu/menu.page';
import { MenuPageModule } from '../app/menu/menu.module';

import { ConexionUsuariosPage } from '../app/conexion-usuarios/conexion-usuarios.page';
import {ConexionUsuariosPageModule} from '../app/conexion-usuarios/conexion-usuarios.module';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [MenuPage,ConexionUsuariosPage],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    MenuPageModule,
    ConexionUsuariosPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera, 

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
