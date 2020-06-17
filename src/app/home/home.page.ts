import { Component,AfterViewInit,OnInit } from '@angular/core';
//import { icon, latLng, Map, marker, point, polyline, tileLayer } from 'leaflet';
//import * as L from 'leaflet';
//import * as LM  from 'leaflet-routing-machine';
//import * as L from 'leaflet';
import 'leaflet';
import 'leaflet-routing-machine';
import { GestureHandling } from "leaflet-gesture-handling";
declare let L: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements AfterViewInit  {
   
   
    map: any;
   
  constructor() { }
  ngAfterViewInit(): void {
    this.crearMap()
  }



 
  ngAfterContentInit(): void {
    
    //this.crearMap();

  }

  crearMap(){
    const parCor={
      lat:-1.3105168,
      lng:-78.5100714,
    };
    const zoom=12;
    this.map=L.map('idMap',{
      center:[parCor.lat,parCor.lng],
      zoom:zoom
    });
    const miLayer=L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
     
      attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    });
    miLayer.addTo(this.map);
    
    const rou= L.Routing.control({
      waypoints: [
        L.latLng(-1.3105168, -78.5100714),
        L.latLng(-1.3304075, -78.5233261)
      ],
      show: false
    });
    //.addTo(this.map).hide()
    rou.addTo(this.map);
    
   
  }

  /*
  
  // Define our base layers so we can reference them multiple times
  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  Wcarto = tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
  });

  // Marker for the top of Mt. Ranier
  summit = marker([ 46.8523, -121.7603 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });

  // Marker for the parking lot at the base of Mt. Ranier trails
  paradise = marker([ 46.78465227596462,-121.74141269177198 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      iconRetinaUrl: 'leaflet/marker-icon-2x.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });

  // Path from paradise to summit - most points omitted from this example for brevity
  route = polyline([[ 46.78465227596462,-121.74141269177198 ],
    [ 46.80047278292477, -121.73470708541572 ],
    [ 46.815471360459924, -121.72521826811135 ],
    [ 46.8360239546746, -121.7323131300509 ],
    [ 46.844306448474526, -121.73327445052564 ],
    [ 46.84979408048093, -121.74325201660395 ],
    [ 46.853193528950214, -121.74823296256363 ],
    [ 46.85322881676257, -121.74843915738165 ],
    [ 46.85119913890958, -121.7519719619304 ],
    [ 46.85103829018772, -121.7542376741767 ],
    [ 46.85101557523012, -121.75431755371392 ],
    [ 46.85140013694763, -121.75727385096252 ],
    [ 46.8525277543813, -121.75995212048292 ],
    [ 46.85290292836726, -121.76049157977104 ],
    [ 46.8528160918504, -121.76042997278273 ]]);

  // Layers control object with our two base layers and the three overlay layers
  layersControl = {
    baseLayers: {
      'Street Maps': this.streetMaps,
      'Wikimedia Maps': this.wMaps
    },
    overlays: {
      'Mt. Rainier Summit': this.summit,
      'Mt. Rainier Paradise Start': this.paradise,
      'Mt. Rainier Climb Route': this.route
    }
  };
    options = {
      layers: [ this.Wcarto, this.route, this.summit, this.paradise ],
      zoom: 7,
      center: latLng([ 46.879966, -121.726909 ])
    };
  
    onMapReady(map: Map) {
    
      map.fitBounds(this.route.getBounds(), {
        padding: point(24, 24),
        maxZoom: 12,
        animate: true
      });
    }
  
*/

}
