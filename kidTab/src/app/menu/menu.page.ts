import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  animales = '../../assets/Animales.PNG';
  colores = '../../assets/Colores.PNG';

  listaColores:boolean;
  listaNumeros:boolean;
  listaAnimales:boolean;

  opcion: any;
  imgOpcion: any;
  idioma: any;



  constructor() { 
    this.listaColores = true;
    this.listaNumeros = false;
    this.listaAnimales = false;
  }

  ngOnInit() {
    this.opcion = 1;
    this.idioma = 1;
    //this.cambiarOpcion();
    
  
  }

  cambiarOpcion(){
    switch(this.opcion){
      case 1:
        this.mostrarNumeros();
        this.opcion = 2;
        break;

      case 2:
        this.mostrarAnimales();
        this.opcion = 3;
        break;

      case 3:
        this.opcion = 1;
        this.mostrarColores();
        break;

    }
    
  }

  cambiarIdioma(){
    switch(this.idioma){
      case 1:
        //this.mostrarColores();
        this.idioma = 2;
        
        break;

      case 2:
        //this.mostrarNumeros();
        this.idioma = 3;
        break;

      case 3:
        this.idioma = 1;
        //this.mostrarAnimales();
        break;

    }
  }
  
  
  mostrarColores(){
    this.listaColores=true;
    this.listaNumeros=false;
    this.listaAnimales=false;
  }

  mostrarNumeros(){
    this.listaColores=false;
    this.listaNumeros=true;
    this.listaAnimales=false;
    
  }

  mostrarAnimales(){
    this.listaColores=false;
    this.listaNumeros=false;
    this.listaAnimales=true;
    
  }

  reproducir(seleccion){
  
    switch(this.opcion){
      case 1://colores
        
        switch(this.idioma){
          
          case 1:
            //espaniol
            switch(seleccion){
              
              case 'azul':
                var audioAzul = new Audio();
                audioAzul.src = '../../assets/espanol/colores/azul.mp3';          
                audioAzul.load();            
                audioAzul.play();
                break;

              case 'rojo':
                let audioRojo = new Audio();
                audioRojo.src = '../../assets/espanol/colores/rojo.mp3';        
                audioRojo.load();            
                audioRojo.play();
                break; 
              
              case 'verde':
                var audioVerde = new Audio();
                audioVerde.src = '../../assets/espanol/colores/verde.mp3';        
                audioVerde.load();            
                audioVerde.play();
                break;
              
              case 'amarillo':
                var audioAmarillo = new Audio();
                audioAmarillo.src = '../../assets/espanol/colores/amarillo.mp3';        
                audioAmarillo.load();            
                audioAmarillo.play();
                break;
              
              case 'violeta':
                var audioVioleta = new Audio();
                audioVioleta.src = '../../assets/espanol/colores/violeta.mp3';        
                audioVioleta.load();            
                audioVioleta.play();
                break;
            
            }
            break;

          case 2:
            //ingles
            switch(seleccion){
                
              case 'azul':
                var audioAzul = new Audio();
                audioAzul.src = '../../assets/ingles/colores/azul.mp3';          
                audioAzul.load();            
                audioAzul.play();
                break;

              case 'rojo':
                let audioRojo = new Audio();
                audioRojo.src = '../../assets/ingles/colores/rojo.mp3';        
                audioRojo.load();            
                audioRojo.play();
                break; 
              
              case 'verde':
                var audioVerde = new Audio();
                audioVerde.src = '../../assets/ingles/colores/verde.mp3';        
                audioVerde.load();            
                audioVerde.play();
                break;
              
              case 'amarillo':
                var audioAmarillo = new Audio();
                audioAmarillo.src = '../../assets/ingles/colores/amarillo.mp3';        
                audioAmarillo.load();            
                audioAmarillo.play();
                break;
              
              case 'violeta':
                var audioVioleta = new Audio();
                audioVioleta.src = '../../assets/ingles/colores/violeta.mp3';        
                audioVioleta.load();            
                audioVioleta.play();
                break;
            
            }
            break;

          case 3:
            //aleman
            switch(seleccion){
                
              case 'azul':
                var audioAzul = new Audio();
                audioAzul.src = '../../assets/aleman/colores/azul.mp3';          
                audioAzul.load();            
                audioAzul.play();
                break;

              case 'rojo':
                let audioRojo = new Audio();
                audioRojo.src = '../../assets/aleman/colores/rojo.mp3';        
                audioRojo.load();            
                audioRojo.play();
                break; 
              
              case 'verde':
                var audioVerde = new Audio();
                audioVerde.src = '../../assets/aleman/colores/verde.mp3';        
                audioVerde.load();            
                audioVerde.play();
                break;
              
              case 'amarillo':
                var audioAmarillo = new Audio();
                audioAmarillo.src = '../../assets/aleman/colores/amarillo.mp3';        
                audioAmarillo.load();            
                audioAmarillo.play();
                break;
              
              case 'violeta':
                var audioVioleta = new Audio();
                audioVioleta.src = '../../assets/aleman/colores/violeta.mp3';        
                audioVioleta.load();            
                audioVioleta.play();
                break;
            
            }
            break;      
        }
      break;

      case 3://animales
        
        switch(this.idioma){
          
          case 1:
            //espaniol
            switch(seleccion){
              
              case 'vaca':
                var audioAzul = new Audio();
                audioAzul.src = '../../assets/espanol/animales/vaca.mp3';          
                audioAzul.load();            
                audioAzul.play();
                break;

              case 'gallo':
                let audioRojo = new Audio();
                audioRojo.src = '../../assets/espanol/animales/gallo.mp3';        
                audioRojo.load();            
                audioRojo.play();
                break; 
              
              case 'caballo':
                var audioVerde = new Audio();
                audioVerde.src = '../../assets/espanol/animales/caballo.mp3';        
                audioVerde.load();            
                audioVerde.play();
                break;
              
              case 'oveja':
                var audioAmarillo = new Audio();
                audioAmarillo.src = '../../assets/espanol/animales/oveja.mp3';        
                audioAmarillo.load();            
                audioAmarillo.play();
                break;
              
              case 'pato':
                var audioVioleta = new Audio();
                audioVioleta.src = '../../assets/espanol/animales/pato.mp3';        
                audioVioleta.load();            
                audioVioleta.play();
                break;
            
            }
            break;

          case 2:
            //ingles
            switch(seleccion){
              case 'vaca':
                var audioAzul = new Audio();
                audioAzul.src = '../../assets/ingles/animales/vaca.mp3';          
                audioAzul.load();            
                audioAzul.play();
                break;

              case 'gallo':
                let audioRojo = new Audio();
                audioRojo.src = '../../assets/ingles/animales/gallo.mp3';        
                audioRojo.load();            
                audioRojo.play();
                break; 
              
              case 'caballo':
                var audioVerde = new Audio();
                audioVerde.src = '../../assets/ingles/animales/caballo.mp3';        
                audioVerde.load();            
                audioVerde.play();
                break;
              
              case 'oveja':
                var audioAmarillo = new Audio();
                audioAmarillo.src = '../../assets/ingles/animales/oveja.mp3';        
                audioAmarillo.load();            
                audioAmarillo.play();
                break;
              
              case 'pato':
                var audioVioleta = new Audio();
                audioVioleta.src = '../../assets/ingles/animales/pato.mp3';        
                audioVioleta.load();            
                audioVioleta.play();
                break;
            
            }
          
            break;
            
          case 3:
            //aleman
            switch(seleccion){
              case 'vaca':
                var audioAzul = new Audio();
                audioAzul.src = '../../assets/aleman/animales/vaca.mp3';          
                audioAzul.load();            
                audioAzul.play();
                break;

              case 'gallo':
                let audioRojo = new Audio();
                audioRojo.src = '../../assets/aleman/animales/gallo.mp3';        
                audioRojo.load();            
                audioRojo.play();
                break; 
              
              case 'caballo':
                var audioVerde = new Audio();
                audioVerde.src = '../../assets/aleman/animales/caballo.mp3';        
                audioVerde.load();            
                audioVerde.play();
                break;
              
              case 'oveja':
                var audioAmarillo = new Audio();
                audioAmarillo.src = '../../assets/aleman/animales/oveja.mp3';        
                audioAmarillo.load();            
                audioAmarillo.play();
                break;
              
              case 'pato':
                var audioVioleta = new Audio();
                audioVioleta.src = '../../assets/aleman/animales/pato.mp3';        
                audioVioleta.load();            
                audioVioleta.play();
                break;
            
            }
            
            break;      
        }
      break;

      case 2://numeros
      
      switch(this.idioma){
          
        case 1:
          //espaniol
          switch(seleccion){
            
            case 'uno':
              var audioAzul = new Audio();
              audioAzul.src = '../../assets/espanol/numero/uno.mp3';          
              audioAzul.load();            
              audioAzul.play();
              break;

            case 'dos':
              let audioRojo = new Audio();
              audioRojo.src = '../../assets/espanol/numero/dos.mp3';        
              audioRojo.load();            
              audioRojo.play();
              break; 
            
            case 'tres':
              var audioVerde = new Audio();
              audioVerde.src = '../../assets/espanol/numero/tres.mp3';        
              audioVerde.load();            
              audioVerde.play();
              break;
            
            case 'cuatro':
              var audioAmarillo = new Audio();
              audioAmarillo.src = '../../assets/espanol/numero/cuatro.mp3';        
              audioAmarillo.load();            
              audioAmarillo.play();
              break;
            
            case 'cinco':
              var audioVioleta = new Audio();
              audioVioleta.src = '../../assets/espanol/numero/cinco.mp3';        
              audioVioleta.load();            
              audioVioleta.play();
              break;
          
          }
          break;

        case 2:
          //ingles
          switch(seleccion){
            
            case 'uno':
              var audioAzul = new Audio();
              audioAzul.src = '../../assets/ingles/numero/uno.mp3';          
              audioAzul.load();            
              audioAzul.play();
              break;

            case 'dos':
              let audioRojo = new Audio();
              audioRojo.src = '../../assets/ingles/numero/dos.mp3';        
              audioRojo.load();            
              audioRojo.play();
              break; 
            
            case 'tres':
              var audioVerde = new Audio();
              audioVerde.src = '../../assets/ingles/numero/tres.mp3';        
              audioVerde.load();            
              audioVerde.play();
              break;
            
            case 'cuatro':
              var audioAmarillo = new Audio();
              audioAmarillo.src = '../../assets/ingles/numero/cuatro.mp3';        
              audioAmarillo.load();            
              audioAmarillo.play();
              break;
            
            case 'cinco':
              var audioVioleta = new Audio();
              audioVioleta.src = '../../assets/ingles/numero/cinco.mp3';        
              audioVioleta.load();            
              audioVioleta.play();
              break;
          
          }
        
          break;
          
        case 3:
          //aleman
          switch(seleccion){
            
            case 'uno':
              var audioAzul = new Audio();
              audioAzul.src = '../../assets/aleman/numero/uno.mp3';          
              audioAzul.load();            
              audioAzul.play();
              break;

            case 'dos':
              let audioRojo = new Audio();
              audioRojo.src = '../../assets/aleman/numero/dos.mp3';        
              audioRojo.load();            
              audioRojo.play();
              break; 
            
            case 'tres':
              var audioVerde = new Audio();
              audioVerde.src = '../../assets/aleman/numero/tres.mp3';        
              audioVerde.load();            
              audioVerde.play();
              break;
            
            case 'cuatro':
              var audioAmarillo = new Audio();
              audioAmarillo.src = '../../assets/aleman/numero/cuatro.mp3';        
              audioAmarillo.load();            
              audioAmarillo.play();
              break;
            
            case 'cinco':
              var audioVioleta = new Audio();
              audioVioleta.src = '../../assets/aleman/numero/cinco.mp3';        
              audioVioleta.load();            
              audioVioleta.play();
              break;
          
          }
          
          break;      
      }
      
      break;

    }
    
    
    
    

  }

  


}
