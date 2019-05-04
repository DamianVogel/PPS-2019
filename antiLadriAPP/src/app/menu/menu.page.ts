import { Component, OnInit } from '@angular/core';
//import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';
//import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';
import { timer } from 'rxjs';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public xOrient:any;
  public yOrient:any;
  public zOrient:any;
  public timestamp:any
  public accX:any;
  public accY:any;
  public accZ:any;

  public subscription: any;
  public activar: boolean = true;

  constructor(
    private gyroscope: Gyroscope,
    private deviceMotion: DeviceMotion,
    private flashlight: Flashlight,
    private androidPermissions: AndroidPermissions
  ) { 

  }



  ngOnInit() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      result =>{ console.log('Has permission?',result.hasPermission)
      if(!result.hasPermission){
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
      }
    
    },
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    );
  

  }


  gyrascope(){
    
    let options: GyroscopeOptions = {
      frequency: 500
   };
   
   this.gyroscope.getCurrent(options)
     .then((orientation: GyroscopeOrientation) => {
        console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
        this.xOrient=orientation.x;
        this.yOrient=orientation.y;
        this.zOrient=orientation.z;
        this.timestamp=orientation.timestamp;

      })
     .catch()
   
   
   this.gyroscope.watch()
      .subscribe((orientation: GyroscopeOrientation) => {
         console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
         this.xOrient=orientation.x;
        this.yOrient=orientation.y;
        this.zOrient=orientation.z;
        this.timestamp=orientation.timestamp;
      });
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
        if(this.accY > 3 && flag == true){
          flag = false;
          console.log("Esta vertical");
          
          this.flashlight.switchOn();
          timer(5000).subscribe(() => {
            if(this.accY > 3){
              flag = false;
              this.flashlight.switchOff();
              console.log("Comienza a Reproducir");
              let audioIzq = new Audio();
              audioIzq.src = '../../assets/fiuuu.mp3';          
              audioIzq.load();            
              audioIzq.play();
              
            
            }
          
          
          })
        } else if(this.accY < 3  && flag == false){
          
          this.flashlight.switchOff();
          flag = true;
        }

        
        //izquierda 
        if(this.accX > 3 && flagIzq == true){
            flagIzq = false;
            console.log("Esta a la izquierda");
            
            timer(500).subscribe(() => {
              if(this.accX > 3){
                flagIzq = false;
                //Comienza a Reproducir
                console.log("Comienza a Reproducir");
                let audioIzq = new Audio();
                audioIzq.src = '../../assets/larga.mp3';          
                audioIzq.load();            
                audioIzq.play();
              }
            }); 
          
        }else if(this.accX < 3  && flagIzq == false){
            
          //Para de reproducir this.flashlight.switchOff();
          
          console.log("Detiene la Reproduccion"); 
          flagIzq = true;
        }
        
         
        //derecha 
        if(this.accX < -3 && flagDer == true){
          flagDer = false;
          console.log("Esta orientado hacia la derecha");
          
          timer(500).subscribe(() => {
            if(this.accX < -3){
              flagDer = false;
              let audioIzq = new Audio();
              audioIzq.src = '../../assets/ojito.mp3';          
              audioIzq.load();            
              audioIzq.play();
              console.log("Comienza a Reproducir");
            }
          
          
          })
        } else if(this.accX > -3  && flagDer == false){
        
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





