import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-lasso';
import {icon, latLng, Map, marker, point, polyline, PolylineOptions, tileLayer} from 'leaflet';
import { LassoControl } from 'leaflet-lasso';
import { TestBed } from '@angular/core/testing';


@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements AfterViewInit  {

 private lassoControl!: LassoControl;



 @ViewChild('mapID') map!: ElementRef;
// Define our base layers so we can reference them multiple times
 private streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
 private wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  // Marker for the top of Mt. Ranier
 private summit = marker([46.8523, -121.7603], {
  draggable: true, //Make draggable
  autoPan: true,
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });

  // Marker for the parking lot at the base of Mt. Ranier trails
  private paradise = marker([46.78465227596462, -121.74141269177198], {
     draggable: true, //Make draggable
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'leaflet/marker-icon.png',
      iconRetinaUrl: 'leaflet/marker-icon-2x.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });

  // Path from paradise to summit - most points omitted from this example for brevity
  private route = polyline([[46.78465227596462, -121.74141269177198],
    [46.80047278292477, -121.73470708541572],
    [46.815471360459924, -121.72521826811135],
    [46.8360239546746, -121.7323131300509],
    [46.844306448474526, -121.73327445052564],
    [46.84979408048093, -121.74325201660395],
    [46.853193528950214, -121.74823296256363],
    [46.85322881676257, -121.74843915738165],
    [46.85119913890958, -121.7519719619304],
    [46.85103829018772, -121.7542376741767],
    [46.85101557523012, -121.75431755371392],
    [46.85140013694763, -121.75727385096252],
    [46.8525277543813, -121.75995212048292],
    [46.85290292836726, -121.76049157977104],
    [46.8528160918504, -121.76042997278273]]);

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
  // Set the initial set of displayed layers (we could also use the leafletLayers input binding for this)
  options = {
    layers: [this.streetMaps, this.route, this.summit, this.paradise],
    zoom: 10,
    center: latLng([46.879966, -121.726909])
  };

 
   ngOnInit(): void {
    const mapElement = L.map(this.map.nativeElement, this.options);
    this.summit.on('dragend', (e) => {
      // var marker = e.target;
      // var position = marker.getLatLng();
      
      // mapElement.panTo(new L.LatLng(position.lat, position.lng));
    });
    
    
   }
   private setSelectedLayers(layers: any) {

    layers.forEach((layer: { setIcon: (arg0: L.Icon.Default) => void; setStyle: (arg0: { color: string; }) => void; }) => {
        if (layer instanceof L.Marker) {
            
            layer.setIcon(new L.Icon.Default({ className: 'selected '}));
        } else if (layer instanceof L.Path) {
            layer.setStyle({ color: '#ff4620' });
        }
    });

}

  ngAfterViewInit() {

    L.Icon.Default.imagePath = "/assets/";

    
    const mapElement = L.map(this.map.nativeElement, this.options);

  
    L.control.layers(this.layersControl.baseLayers, this.layersControl.overlays).addTo(mapElement);

    this.lassoControl = L.control.lasso().addTo(mapElement); 


    mapElement.on('lasso.finished', (event: any) => {
      this.setSelectedLayers(event.layers);
     })
   
  }

  
  toggleLasso(){
    if (this.lassoControl.enabled()) {
      this.lassoControl.disable();
    } else {
      this.lassoControl.enable();
    }
  }
  lassoFinished(){
  }
  
}

