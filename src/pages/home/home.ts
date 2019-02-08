import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  casas= [];

  constructor(public navCtrl: NavController,
                public http: HttpClient) {
      this.http.get('/v1/api/pin-data?url=/s-renta-inmuebles/guadalajara-y-zona-metro/v1c1098l10567p1&geo=(21.10631012145462,-102.42214381725364),(20.21712862656199,-104.32387728274637)')
      .subscribe(data =>{
        //console.log(JSON.stringify(data));
        if (data.hasOwnProperty('ads')){
          this.casas = data['ads']; //data.ads
        }
      }, error => {
        console.log(JSON.stringify(error));
      });

  }

}
//las imagenes se sacaron del arreglo "pictures" y para acceder a las imagenes, se tenia que acceder a la url que aparece debajo de size 
//no habia tal cual nombres de para los inmuebles, pero si la ubicacion, que se encontraba dentro de la funcion map, en displayName
//los precios se encontraban en el arreglo de price en la funcion de formattedAmount