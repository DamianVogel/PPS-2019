import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Imagenes } from '../../app/enviroment';

import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';

import { ViewChild } from '@angular/core';

import { IonSlides } from '@ionic/angular';
 


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  public xOrient:any;
  public yOrient:any;
  public zOrient:any;
  public timestamp:any
  public accX:any;
  public accY:any;
  public accZ:any;

  public subscription: any;
  public activar: boolean = true;

  @ViewChild('slideWithNav') slideWithNav: IonSlides;





  listaImagenes: any;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  ref = firebase.database().ref('imagenes/');

  constructor(
    private gyroscope: Gyroscope,
    private deviceMotion: DeviceMotion
    
  ) {
    this.ref.on('value', resp => {
      this.listaImagenes = Imagenes(resp);
    });
  }

  ngOnInit() {

    this.Accelerometer();

  }

  Accelerometer(){
    this.activar=false;
    var flag = true;
    var flagIzq =  true;
    var flagDer = true;

    this.deviceMotion.getCurrentAcceleration().then(
      (acceleration: DeviceMotionAccelerationData) =>
       console.log(acceleration),
   
    //  (error: any) => console.log(error)
 
    );
    
    
    
      // Watch device acceleration
      this.subscription = this.deviceMotion.watchAcceleration({frequency:200}).subscribe((acceleration: DeviceMotionAccelerationData) => {
        console.log(acceleration);
        this.accX=acceleration.x;
        this.accY=acceleration.y;
        this.accZ=acceleration.z;
        
        //vertical y linterna
        if(this.accY > 5 && flag == true){
          flag = false;
          console.log("Esta vertical");
          this.slideWithNav.slideTo(0);
        //   this.flashlight.switchOn();
        //   timer(5000).subscribe(() => {
        //     if(this.accY > 3){
        //       flag = false;
        //       this.flashlight.switchOff();
        //       console.log("Comienza a Reproducir");
        //       let audioIzq = new Audio();
        //       audioIzq.src = '../../assets/fiuuu.mp3';          
        //       audioIzq.load();            
        //       audioIzq.play();
              
            
        //     }
          
          
        //   })
        // } else if(this.accY < 3  && flag == false){
          
        //   this.flashlight.switchOff();
        //   flag = true;
        }

        
        //izquierda 
        if(this.accX > 5 && flagIzq == true){
            flagIzq = false;
            console.log("Esta a la izquierda");
            this.slideWithNav.slidePrev();
            // timer(500).subscribe(() => {
            //   if(this.accX > 3){
            //     flagIzq = false;
            //     //Comienza a Reproducir
            //     console.log("Comienza a Reproducir");
            //     let audioIzq = new Audio();
            //     audioIzq.src = '../../assets/larga.mp3';          
            //     audioIzq.load();            
            //     audioIzq.play();
            //   }
            // }); 
          
        }else if(this.accX < 3  && flagIzq == false){
            
          //Para de reproducir this.flashlight.switchOff();
          
          console.log("Detiene la Reproduccion"); 
          flagIzq = true;
        }
        
         
        //derecha 
        if(this.accX < -5 && flagDer == true){
          flagDer = false;
          console.log("Esta orientado hacia la derecha");
           this.slideWithNav.slideNext();
          // timer(500).subscribe(() => {
          //   if(this.accX < -3){
          //     flagDer = false;
          //     let audioIzq = new Audio();
          //     audioIzq.src = '../../assets/ojito.mp3';          
          //     audioIzq.load();            
          //     audioIzq.play();
          //     console.log("Comienza a Reproducir");
          //   }
          
          
          //})
        } else if(this.accX > -5  && flagDer == false){
        
          //parar de reproducir
          console.log("Detiene la Reproduccion"); 
          flagDer = true;
        }

        

      
      }); 
  
  }

  Frenar(){
      this.subscription.unsubscribe();
      this.activar = true;
    }






}