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

import { GaleriaPageModule } from '../app/galeria/galeria.module';
import { GaleriaPage } from '../app/galeria/galeria.page';

import { MenuPage} from '../app/menu/menu.page';
import { MenuPageModule } from '../app/menu/menu.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [ConexionUsuariosPage, GaleriaPage, MenuPage],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    GaleriaPageModule,
    ConexionUsuariosPageModule,
    MenuPageModule

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
