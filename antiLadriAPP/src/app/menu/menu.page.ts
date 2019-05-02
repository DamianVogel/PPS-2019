import { Component, OnInit } from '@angular/core';
//import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';
//import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';
import { timer } from 'rxjs';
import { Flashlight } from '@ionic-native/flashlight/ngx';

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

  constructor(
    private gyroscope: Gyroscope,
    private deviceMotion: DeviceMotion,
    private flashlight: Flashlight
  ) { 

  }



  ngOnInit() {
  

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
      

      if(this.accY > 3){
        
        console.log("Esta vertical");
        
        timer(5000).subscribe(() => {
          if(this.accY > 3){
            this.flashlight.switchOn();
          }  
        
        
        })
      }
      else{
        this.flashlight.switchOff();
      }

      if(this.accX > 3){
        console.log("Esta orientado hacia la izquierda");
      }

      if(this.accX < -3){
        console.log("Esta orientado hacia la derecha");
      }

      

    
    });
    
    
    
  
  
  
  
  }

  Frenar(){
      this.subscription.unsubscribe();
  }

}





